"use client";

import { createContext, ReactNode, useState } from "react";

type TPaginationContext = {
  paginations: any;
  setPaginations: React.Dispatch<React.SetStateAction<{}>>;
};

export const PaginationContext = createContext<TPaginationContext>({
  paginations: {},
  setPaginations: () => {},
});

interface IPaginationProps {
  children: ReactNode;
}

export function PaginationsProvider({ children }: IPaginationProps) {
  const [paginations, setPaginations] = useState({});

  return (
    <PaginationContext value={{ paginations, setPaginations }}>
      {children}
    </PaginationContext>
  );
}
