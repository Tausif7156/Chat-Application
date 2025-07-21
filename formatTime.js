export function formatTime(dateStr) {
  const date = new Date(dateStr);
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
}
