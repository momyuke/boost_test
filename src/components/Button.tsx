import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  classNames?: string;
  onClick?: VoidFunction;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

export const Button = ({
  children,
  classNames,
  onClick,
  type,
  disabled,
}: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classNames} hover:cursor-pointer`}
    >
      {children}
    </button>
  );
};
