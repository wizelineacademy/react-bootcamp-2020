import dayjs from 'dayjs';

export function ageFrom(date) {
  if (!date) return null;
  const from = dayjs(date);
  const now = dayjs(Date.now());
  const units = [
    { unit: 's', amount: '60', string: 'seconds' },
    { unit: 'd', amount: '30', string: 'days' },
    { unit: 'M', amount: '12', string: 'months' },
    { unit: 'y', amount: '1000', string: 'years' },
  ];

  for (let i = 0; i < units.length; i += 1) {
    const diff = now.diff(from, units[i].unit);
    if (diff < units[i].amount) return `${diff} ${units[i].string}`;
  }
}
