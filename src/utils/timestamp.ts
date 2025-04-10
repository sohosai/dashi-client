const timestampConverter = (timestamp: string | null): string => {
  if (timestamp === null) {
    return '';
  }
  const year: number = parseInt(timestamp.slice(0, 4));
  const month: number = parseInt(timestamp.slice(5, 7));
  const date: number = parseInt(timestamp.slice(8, 10));
  const hour: number = parseInt(timestamp.slice(11, 13));
  const minute: number = parseInt(timestamp.slice(14, 16));
  const time: Date = new Date(year, month - 1, date, hour, minute, 0, 0);
  time.setHours(time.getHours() + 9); // JST
  const result: string = `${time.getFullYear()}年 ${time.getMonth()}月 ${time.getDate()}日 ${time.getHours()}時${time.getMinutes()}分`;
  return result;
};

export { timestampConverter };
