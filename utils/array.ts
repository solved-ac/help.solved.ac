export const isPrefixArray = <T>(prefix: T[], array: T[]): boolean => {
  if (prefix.length > array.length) {
    return false;
  }
  return prefix.every((value, index) => value === array[index]);
};
