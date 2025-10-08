import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface IInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  name?: string;
  label?: string;
  labelClassNames?: string;
  inputClassNames?: string;
  classNames?: string;
  required?: boolean;
  defaultValue?: string;
  readOnly?: boolean;
}

interface ITextAreaProps extends IInputProps {
  onChangeTextArea?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const Input = ({
  onChange,
  placeholder = "Input your value here",
  type = "text",
  name,
  label = "Your input",
  inputClassNames,
  labelClassNames,
  required = false,
  defaultValue,
  readOnly,
}: IInputProps) => {
  return (
    <>
      <label className={`${labelClassNames} text-white`} htmlFor={name}>
        {label}
      </label>
      <input
        required={required}
        type={type}
        defaultValue={defaultValue}
        name={name}
        className={`${inputClassNames} text-white bg-dark-25 p-5 rounded-lg`}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
      />
    </>
  );
};

export const TextArea = ({
  placeholder = "Input your value here",
  onChangeTextArea,
  name,
  label = "Your input",
  inputClassNames,
  labelClassNames,
  required = false,
  defaultValue,
  readOnly,
}: ITextAreaProps) => {
  return (
    <>
      <label className={`${labelClassNames} text-white`} htmlFor={name}>
        {label}
      </label>
      <textarea
        readOnly={readOnly}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        onChange={onChangeTextArea}
        className={`${inputClassNames} text-white bg-dark-25 p-5 rounded-lg`}
        name={name}
        id={name}
      ></textarea>
    </>
  );
};
