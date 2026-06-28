export function formatDate(date) {
  const year = date.getFullYear();

  const m = date.getMonth() + 1;
  const month = m < 10 ? `0${m}` : `${m}`;

  const d = date.getDate();
  const day = d < 10 ? `0${d}` : `${d}`;

  const combinedFullDate = `${year}/${month}/${day}`;
  return combinedFullDate;
}
