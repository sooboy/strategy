import dayjs from 'npm:dayjs';
import utc from 'npm:dayjs/plugin/utc';
import timezone from 'npm:dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Shanghai');
export const Now = () => Format()

export const Format = (date?: dayjs.ConfigType) => dayjs(date).tz()


