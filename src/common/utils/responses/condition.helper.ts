import { getConnection } from 'typeorm';

export type SelectConditionType = {
  field: string;
  dataType: string;
  operator: string;
  condition: string;
};
const fieldType = (condition: SelectConditionType): string =>
  condition.field === 'text' ? `UPPER(${condition.field})` : condition.field;

const searchCondition = (
  operator: string,
  params: SelectConditionType,
): string => {
  const logicalCondition = {
    LIKE: ` AND ${fieldType(params)} LIKE  UPPER('%${params.condition}%')\n`,
    'IS NULL': ` AND ${fieldType(params)} IS NULL`,
    AND: ` AND ${fieldType(params)} ${params.operator}  '${params.condition}'`,
    IN: ` AND ${fieldType(params)} IN  (${params.condition})`,
    OR: ` OR ${fieldType(params)} ${params.operator}  '${params.condition}`,
    BETWEEN: ` AND ${fieldType(params)} BETWEEN  '${
      `${params.condition}`.split(',')[0]
    }'  AND '${`${params.condition}`.split(',')[1]}' `,
    'NOT BETWEEN': `  AND ${fieldType(params)} NOT BETWEEN  ${
      `${params.condition}`.split(',')[0]
    }'  AND ${`${params.condition}`.split(',')[1]} `,
    '=': `  AND ${fieldType(params)} ${params.operator}  '${params.condition}'`,
    '>': `  AND ${fieldType(params)} ${params.operator}  '${params.condition}'`,
    '<': `  AND ${fieldType(params)} ${params.operator}  '${params.condition}'`,
    '<=': `  AND ${fieldType(params)} ${params.operator}  '${
      params.condition
    }'`,
    '>=': `  AND ${fieldType(params)} ${params.operator}  '${
      params.condition
    }'`,
    '!=': `  AND ${fieldType(params)} ${params.operator}  '${
      params.condition
    }'`,
  };
  return logicalCondition[operator] || '';
};
export const searchConditionQuery = async (
  conditions: SelectConditionType[] = [],
  tableName: string,
  tableNameShort: string,
): Promise<string> => {

  let query = ``;
  conditions = await deleteInvalidCondition(
    conditions,
    tableName,
    tableNameShort,
  );  
  conditions.forEach((condition) => {
    query += searchCondition(condition.operator, condition);
  });

  return query;
};
const deleteInvalidCondition = async (
  conditions: SelectConditionType[],
  tableName: string,
  tableNameShort: string,
): Promise<SelectConditionType[]> => {
  const statement = `
  SELECT COLUMN_NAME,DATA_TYPE
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_NAME = '${tableName}'
  ORDER BY ORDINAL_POSITION`;

  try {
    const columns: { column_name: string; data_type: string }[] =
      await getConnection().query(statement);
    const columnExists = (field: string) =>
      columns.some((elem) => elem.column_name.toLocaleLowerCase() === field?.toLocaleLowerCase());

    const columnDataColumn = (field: string) =>
      columns.filter((elem) => elem.column_name.toLocaleLowerCase() === field?.toLocaleLowerCase());


    return conditions
      
      .filter((condition) =>
        columnExists(condition?.field?.toLocaleLowerCase()),
      ).map((condition) => {
        const [columnInfo]=  columnDataColumn(condition.field)||
         [{ data_type: '' }];
        const columnType = columnInfo.data_type;
        return {
          ...condition,
          field: tableNameShort + '.' + `"${condition.field.toLocaleLowerCase()}"`,
          dataType: columnType,
        };
      });
  } catch (error) {
    console.log(error);
  }
};
