import {
  DEFAULT_PAGINATION_PAGE_NUMBER,
  DEFAULT_PAGINATION_PAGE_SIZE,
} from 'src/common/constants/global/globalContansts';
import {
  QueryParams,
  ResponseMetadata,
  PaginationLinks,
} from 'src/common/types/response.type';

import { getConnection, SelectQueryBuilder } from 'typeorm';

export const paginatedQuery = async <T>(
  queryElement: SelectQueryBuilder<T> | string,
  queryParams: QueryParams,
): Promise<[T[], ResponseMetadata]> => {
  const {
    page: pageNumber = DEFAULT_PAGINATION_PAGE_NUMBER,
    size: pageSize = DEFAULT_PAGINATION_PAGE_SIZE,
  } = queryParams;
  const startPosition = Number(pageSize) * Number((pageNumber > 0 ? pageNumber: 1) - 1);
  const finishPosition = Number(startPosition) + Number(pageSize);
  const mainQuerySql =
    typeof queryElement === 'string' ? queryElement : queryElement.getSql();
  const paginatedQuerySql = `
   
    SELECT *
    FROM (${mainQuerySql}) as a
    LIMIT ${Math.abs(finishPosition)}
    OFFSET ${Math.abs(startPosition)};
  `;
  console.log("🚀 ~ file: pagination.ts ~ line 26 ~ paginatedQuerySql", paginatedQuerySql)
  try {
    const result = await getConnection().query(paginatedQuerySql);
    const [{ rowcount = 0 }] = await getConnection().query(
      `SELECT COUNT(*) AS ROWCOUNT from (${mainQuerySql}) as C`,
    );
    const totalRows = parseInt(rowcount)||0;
    const totalPages = Math.ceil(totalRows / pageSize);
    const meta = getQueryMetadata(
      result.length,
      totalPages,
      {
        page: pageNumber,
        size: pageSize,
      },
      totalRows,
    );

    return [result, meta];
  } catch (e) {
    console.log(e);
  }
};

const getQueryMetadata = (
  resultCount: number,
  totalPages: number,
  queryParams: QueryParams,
  totalRows: number,
): ResponseMetadata => {
  const { page: pageNumber, size: pageSize } = queryParams;

  return {
    pagination: {
      currentPage: pageNumber,
      totalPages,
      totalRows,
      pageSize,
      count: resultCount,
      links: getPaginationLinks(totalPages, queryParams),
    },
  };
};

const getPaginationLinks = (
  totalPages: number,
  queryParams: QueryParams,
): PaginationLinks => {
  const { page: pageNumber } = queryParams;
  const hasNextPage = pageNumber < totalPages;
  const hasPreviousPage =
    pageNumber > DEFAULT_PAGINATION_PAGE_NUMBER && pageNumber <= totalPages;

  return {
    nextPage: hasNextPage ? getNextPageUrl(queryParams) : null,
    previousPage: hasPreviousPage ? getPreviousPageUrl(queryParams) : null,
  };
};

const getPreviousPageUrl = (queryParams: QueryParams): string => {
  return generateUrl({ ...queryParams, page: queryParams.page - 1 });
};

const getNextPageUrl = (queryParams: QueryParams): string => {
  return generateUrl({ ...queryParams, page: queryParams.page + 1 });
};

const generateUrl = (queryParams: QueryParams): string => {
  const params = Object.entries(queryParams).map(
    ([key, value]) => `${key}=${value}`,
  );

  return `?${params.join('&')}`;
};
