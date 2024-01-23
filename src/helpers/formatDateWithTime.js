export function formatDateWithTime(dateString) {
  const date = new Date(dateString);

  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  };

  const localDateString = new Intl.DateTimeFormat("es-CO", options).format(
    date
  );

  return localDateString;
}
