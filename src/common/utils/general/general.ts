export const sumNews = (arr = [], operation = "RESTA") => {
    return arr.reduce(
      (acc, item: Record<string, any>) =>
        operation === item.operation ? acc + item.amount : acc + 0,
      0
    );
  };