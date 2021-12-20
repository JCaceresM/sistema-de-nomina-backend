export type DateType = {
  hour: string;
  date: string;
};
export type usesDose = {
  laboratorio: string;
  tipo_vacuna: string;
  vacuna_administrada: string;
  dosis: string;
  fecha: string;
};
export type VaccinatedDataType = {
  issued?: {
    es: string;
    en: string;
  };
  name?: string;
  lastName?: string;
  dateOfBirth?: string | Date;
  vaccines?: usesDose[];
  dataToSetIntoQRCode?: string;
  cedula?: string;
};
export type BadRequestType = {
  message?: string;
  body?: Record<string, unknown>;
  status?: number;
};
export interface Login {
  username: string;
  password?: string;
  user_id: number;
  roles?: string[];
}

export type Consents = {
  fecha_consentimiento: Date;
  codigo: string;
  request: any;
};

export type SmartHealt = {
  response: any;
  codigo: string;
};
