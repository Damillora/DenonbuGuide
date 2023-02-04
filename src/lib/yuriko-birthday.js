import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const isYurikoBirthday = function() {
    const today = dayjs().tz("Asia/Tokyo");
    const month = today.month();
    const date = today.date();
    return (month === 2 /* march */) && (date === 18);
}

export {
    isYurikoBirthday
}
