export const getSpan = (queryParams) => {
  if (queryParams && !!Object.keys(queryParams).length) {
    const { a, b, c } = queryParams;
    const result = +a + +b + +c;

    return "<span>" + result + "</span>";
  }
  return "<span>Hello i am span</span>";
};
