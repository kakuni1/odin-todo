export function formatDate(date) {
  const year = date.getFullYear();

  const m = date.getMonth() + 1;
  const month = m < 10 ? `0${m}` : `${m}`;

  const d = date.getDate();
  const day = d < 10 ? `0${d}` : `${d}`;

  const combinedFullDate = `${year}/${month}/${day}`;
  return combinedFullDate;
}

export function thisWeek(date) {
  const inputDate = new Date(`${date}T00:00:00`);
  const nowDate = new Date();

  // reset to sunday
  inputDate.setDate(inputDate.getDate() - inputDate.getDay());
  nowDate.setDate(nowDate.getDate() - nowDate.getDay());

  // reset time
  inputDate.setHours(0, 0, 0, 0);
  nowDate.setHours(0, 0, 0, 0);

  // check same week (same sunday)
  return inputDate.getTime() === nowDate.getTime();
}

export function thisDay(date) {
  const inputDay = new Date(`${date}T00:00:00`);
  const nowDay = new Date();

  // reset time
  inputDay.setHours(0, 0, 0, 0);
  nowDay.setHours(0, 0, 0, 0);

  // check same day (time reset)
  return inputDay.getTime() === nowDay.getTime();
}
