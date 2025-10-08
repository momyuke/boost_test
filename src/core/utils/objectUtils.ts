export const  convertFormDataToObject = <T>(formData: FormData): T  => {
  const obj: any = {};
   formData.forEach((value, key) => {
    if (typeof value === 'string') {
      if (value === 'true') obj[key] = true;
      else if (value === 'false') obj[key] = false;
      else if (!isNaN(Number(value)) && value.trim() !== '') obj[key] = Number(value);
      else obj[key] = value;
    } else {
      obj[key] = value; 
    }
  });
  return obj as T;
}