export function formatDateWithTime(date) {
  date = new Date(date);
  const day = ("0" + date.getDate()).slice(-2);
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const month = monthNames[monthIndex];

  return `${day} ${month} ${year} ${hours}:${minutes}`;
}
