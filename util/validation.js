export const isValid = (str) => {
  const pattern = /^[0-9.,]+$/;
  return pattern.test(str);
};
