export interface IPagination {
  page?: number;
  perPage?: number;
}

export const defaultPagination = {
  page: 1,
  perPage: 2,
};

export const PaginationKeys = {
  BLOGS: "BLOGS",
};
