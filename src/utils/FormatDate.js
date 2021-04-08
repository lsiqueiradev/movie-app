import { format } from 'date-fns-tz';

export default function FormatDate(data) {
    return format(new Date(data), 'yyyy', {
        timeZone: 'America/Sao_Paulo',
    });
}
