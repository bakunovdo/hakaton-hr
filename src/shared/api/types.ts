type SortObject = {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
};

type PagableObject = {
  offset: number;
  sort: SortObject;
  paged: boolean;
  unpaged: boolean;
  pageNumber: number;
  pageSize: number;
};

export type PaginateRequestParams = {
  page: number;
  size: number;
  sort: string[];
};

export type PaginatedResponse<T extends object> = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: T[];
  number: number; // ???
  pagable: PagableObject;
  sort: SortObject;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
};
