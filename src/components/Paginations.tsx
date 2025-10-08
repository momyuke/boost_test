import { Button } from "@/components/Button";
import { PaginationContext } from "@/core/context/pagination.context";
import { usePaginationData } from "@/core/hooks/usePaginationsData";
import { defaultPagination, IPagination } from "@/domains/pagination.domain";
import { use } from "react";

interface IPaginationProps {
  paginationKey: string;
  totalData: number;
}

export const Pagination = ({ paginationKey, totalData }: IPaginationProps) => {
  const { paginations } = use(PaginationContext);
  const { changePagination } = usePaginationData({ paginationKey });

  const { page = defaultPagination.page, perPage = defaultPagination.perPage } =
    (paginations[paginationKey] ?? {}) as IPagination;

  const totalPages = Math.ceil(totalData / perPage);

  const onBackPage = () => {
    if (page <= 1) return;
    changePagination({ page: (page ?? 0) - 1 });
  };

  const onNextPage = () => {
    changePagination({ page: (page ?? 0) + 1 });
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <Button
        onClick={onBackPage}
        disabled={page === 1}
        classNames="bg-yellow-55 text-dark-08 px-5 py-2 rounded-md hover:bg-yellow-90  disabled:bg-grey-50"
      >
        Prev
      </Button>

      <div className="text-yellow-55 font-bold">{page}</div>

      <Button
        onClick={onNextPage}
        disabled={page === totalPages}
        classNames="bg-yellow-55 text-dark-08 px-5 py-2 rounded-md hover:bg-yellow-90 disabled:bg-grey-50"
      >
        Next
      </Button>
    </div>
  );
};
