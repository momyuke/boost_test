import { ModalContext } from "@/core/context/modal.context";
import { useModalData } from "@/core/hooks/useModalData";
import { ReactNode, use } from "react";

interface IModalProps {
  modalKey: string;
  onClose?: () => void;
  children?: ReactNode;
}

export const Modal = ({ onClose, children, modalKey }: IModalProps) => {
  const { modalKeys } = use(ModalContext);
  const { closeModal } = useModalData({ modalKey });
  const isOpen = modalKeys[modalKey];
  if (!isOpen) return null;

  const onModalClose = () => {
    closeModal();
    if (onClose != null) onClose();
  };

  return (
    <div className="fixed inset-0 bg-black opacity-90 flex items-center justify-center z-9999">
      <div className="bg-yellow-55 opacity-100 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onModalClose}
          className="absolute text-4xl hover:cursor-pointer top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
