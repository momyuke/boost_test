"use client";

import { createContext, ReactNode, useState } from "react";

type TModalContext = {
  modalKeys: any;
  setModalKeys: React.Dispatch<React.SetStateAction<{}>>;
};

export const ModalContext = createContext<TModalContext>({
  modalKeys: {},
  setModalKeys: () => {},
});

interface IBlogProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: IBlogProviderProps) {
  const [modalKeys, setModalKeys] = useState({});

  return (
    <ModalContext value={{ modalKeys, setModalKeys }}>{children}</ModalContext>
  );
}
