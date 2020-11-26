export const getDaysDiff = (d1, d2 = new Date()) => {
  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const getMonthDiff = (d1, d2 = new Date()) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

export const getDateDiff = (d1, d2 = new Date()) => {
  const diff = Math.floor(d2.getTime() - d1.getTime());
  const day = 1000 * 60 * 60 * 24;

  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31);

  const dateDiff = {
    Days: days,
    Months: months,
    Years: Math.floor(months / 12),
  };

  return dateDiff;
};

const DateUtils = {
  getDateDiff,
  getDaysDiff,
  getMonthDiff,
};
export default DateUtils;
