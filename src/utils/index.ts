export const onlyNumbers = (value: any) => {
  if (isNaN(parseInt(value))) {
    return -1;
  }
  return value;
};
