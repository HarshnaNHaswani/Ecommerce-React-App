export const numSort = (type, arr, key = "") => {
  const arrToBeSorted = arr;
  switch (type) {
    case "ascending": {
      return arrToBeSorted.sort((a, b) => (key ? a[key] - b[key] : a - b));
    }

    case "descending": {
      return arrToBeSorted.sort((a, b) => (key ? b[key] - a[key] : b - a));
    }
    default:
      return arrToBeSorted;
  }
};
