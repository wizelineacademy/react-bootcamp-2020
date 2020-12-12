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
};
export default DateUtils;
