interface IDropdownProps {
  data: string[];
  displayData?: string[];
  label: string;
  name: string;
  defaultValue?: string;
  readonly?: boolean;
}

export const Dropdown = ({
  data,
  label,
  displayData,
  name,
  defaultValue,
  readonly = false,
}: IDropdownProps) => {
  if (displayData == null) displayData = data;
  if (data.length !== displayData?.length) return;

  return (
    <>
      <label className="text-white">{label}</label>
      <select
        disabled={readonly}
        className="text-white bg-dark-25 p-5 rounded-lg"
        name={name}
        defaultValue={defaultValue}
      >
        <option value="">Select your Category</option>
        {data.map((e, i) => {
          return (
            <option key={i} value={e}>
              {displayData[i]}
            </option>
          );
        })}
      </select>
    </>
  );
};
