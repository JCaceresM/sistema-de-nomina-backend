export const sumNews = (arr = [], operation = "RESTA") => {
    return arr.reduce(
      (acc, item: Record<string, any>) =>
        operation === item.operation ? acc + item.amount||0 : acc + 0,
      0
    );
  };