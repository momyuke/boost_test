export const formatDateToReadable = (
  dateInput: Date | string | null | undefined
): string => {
  if (dateInput == null || dateInput == undefined) return "";
  const date = new Date(dateInput);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
};
