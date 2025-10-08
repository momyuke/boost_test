import { PaginationContext } from "@/core/context/pagination.context";
import { IPagination } from "@/domains/pagination.domain";
import { use } from "react";

interface IUsePaginationsDataProps {
  paginationKey: string;
}
export const usePaginationData = ({
  paginationKey,
}: IUsePaginationsDataProps) => {
  const { setPaginations } = use(PaginationContext);

  const changePagination = ({ page, perPage }: IPagination) => {
    setPaginations((e: any) => {
      return {
        ...e,
        [paginationKey]: {
          page,
          perPage,
        },
      };
    });
  };

  return { changePagination };
};
