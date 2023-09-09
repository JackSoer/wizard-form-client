const cutString = (
  string: string,
  maxLength: number,
  dots: boolean
): string => {
  if (string.length <= maxLength) {
    return string;
  }

  let result = string.slice(0, maxLength - 1);

  if (dots) {
    result += '...';
  }
  console.log(result);

  return result;
};

export default cutString;
