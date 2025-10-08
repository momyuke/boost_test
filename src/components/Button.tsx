import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  classNames?: string;
  onClick?: VoidFunction;
}

export const Button = ({ children, classNames, onClick }: IButtonProps) => {
  return (
    <button onClick={onClick} className={`${classNames} hover:cursor-pointer`}>
      {children}
    </button>
  );
};
