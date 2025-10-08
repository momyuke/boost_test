import { ModalContext } from "@/core/context/modal.context";
import { use } from "react";

interface IUseModalDataProps {
  modalKey: string;
}
export const useModalData = ({ modalKey }: IUseModalDataProps) => {
  const { setModalKeys } = use(ModalContext);

  const closeModal = () => {
    setModalKeys((e) => {
      return {
        ...e,
        [modalKey]: false,
      };
    });
  };

  const openModal = () => {
    setModalKeys((e) => {
      return {
        ...e,
        [modalKey]: true,
      };
    });
  };

  return { closeModal, openModal };
};
