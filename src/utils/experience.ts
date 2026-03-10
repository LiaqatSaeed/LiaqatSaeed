const START_YEAR = 2016;
const START_MONTH_INDEX = 5; // June (0-based)
const START_DAY = 1;

export const getExperienceYears = (now = new Date()) => {
  const start = new Date(START_YEAR, START_MONTH_INDEX, START_DAY);
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  const dayDiff = now.getDate() - start.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years -= 1;
  }

  return Math.max(years, 0);
};

export const formatExperienceYears = (now = new Date()) => {
  const years = getExperienceYears(now);
  return `${years}+ years`;
};
