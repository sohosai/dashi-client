import dayjs, { Dayjs } from 'dayjs';

const timestampConverter = (timestamp: string | null): string => {
  if (timestamp === null) {
    return '';
  }
  const year: number = parseInt(timestamp.slice(0, 4));
  const month: number = parseInt(timestamp.slice(5, 7)) - 1;
  const date: number = parseInt(timestamp.slice(8, 10));
  const hour: number = parseInt(timestamp.slice(11, 13));
  const minute: number = parseInt(timestamp.slice(14, 16));
  // dayjs
  const jst: Dayjs = dayjs(new Date(year, month, date, hour, minute, 0, 0)).add(9, 'hour');
  const result: string = `${jst.get('year')}年 ${jst.get('month') + 1}月 ${jst.get('date')}日 ${jst.get(
    'hour'
  )}時${jst.get('minute')}分`;
  return result;
};

export { timestampConverter };
