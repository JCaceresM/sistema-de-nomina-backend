const dateExpiration = (days: number, hours: number, seconds: number) => {
  const ActualDate = new Date();
  return new Date(
    ActualDate.getFullYear(),
    ActualDate.getMonth(),
    days,
    hours,
    ActualDate.getMinutes(),
    seconds,
    ActualDate.getMilliseconds(),
  );
};

export const JWTExpirationToken = (time: string) => {
  const type = time.split('')[time.length - 1];
  time = time.slice(0, time.length - 1);
  const ActualDate = new Date();
  try {
    const timeExpirationSet = Number(time);
    switch (type) {
      case 'h':
      case 'H':
        return dateExpiration(
          ActualDate.getDate(),
          ActualDate.getHours() + timeExpirationSet,
          ActualDate.getSeconds(),
        );
      case 'd':
      case 'D':
        return dateExpiration(
          ActualDate.getDate() + timeExpirationSet,
          ActualDate.getHours(),
          ActualDate.getSeconds(),
        );
      case 's':
      case 'S':
        return dateExpiration(
          ActualDate.getDate(),
          ActualDate.getHours(),
          ActualDate.getSeconds() + timeExpirationSet,
        );

      default:
        return dateExpiration(
          ActualDate.getDate(),
          ActualDate.getHours(),
          ActualDate.getSeconds() + timeExpirationSet,
        );
    }
  } catch (error) {
    console.error('Error while create expired Token date');
  }
};

export const validateLawBonus = (record: Array<any>): boolean => {
  const sorted = record.sort(
    (date1, date2) => date1.created_at - date2.created_at,
  );
  if (record.length < 1) return false;
  return sorted.every((element, index, array) => {
    
    if (index > 0) {
      if (element.type !== 'R') {
        const next = new Date(element).getMonth();
        const prev = new Date(array[index - 1]).getMonth();
        return prev + 1 === next;
      } else {
        return false;
      }
    } else {
      return true;
    }
  });
};
