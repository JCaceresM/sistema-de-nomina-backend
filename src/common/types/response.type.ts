import { Nullable } from "./general"

export type ResponseMetadata = {
    pagination: {
      currentPage: number
      totalPages: number
      totalRows: number
      count: number
      pageSize: number
      links?: PaginationLinks
    }
  }
  export type QueryParams = {
    page?: number
    size?: number
  }
  export type PaginationLinks = {
    nextPage: Nullable<string>
    previousPage: Nullable<string>
  }
  