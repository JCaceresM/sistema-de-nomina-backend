
export type BadRequestType = {
  message?: string;
  body?: Record<string, unknown>;
  status?: number;
};

export type PaginationType = {
  take: number;
  skip: number;
};
export type Nullable<T> = T | null
