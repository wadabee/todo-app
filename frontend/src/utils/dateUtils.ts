import dayjs from 'dayjs';
import 'dayjs/locale/ja';

export const formatDatetime = (date?: string | number | Date | dayjs.Dayjs | null | undefined) => {
  return dayjs(date).locale('ja').format('YYYY-MM-DD HH:mm:ss');
};
