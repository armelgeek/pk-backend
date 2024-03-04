export const removeId = (str: string) => {
  const strLength = str.length;
  if (str.charAt(strLength - 1) === 'd' && str.charAt(strLength - 2) === 'I') {
    return str.slice(0, -2);
  }
  return str;
}