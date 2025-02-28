export default () => {
  const date = new Date();
  const datelapaz = new Intl.DateTimeFormat("es-BO", {
    timeZone: "America/La_Paz",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(date);
  const year = datelapaz.find((e) => e.type === "year").value;
  const month = datelapaz.find((e) => e.type === "month").value;
  const day = datelapaz.find((e) => e.type === "day").value;
  const hour = datelapaz.find((e) => e.type === "hour").value;
  const minute = datelapaz.find((e) => e.type === "minute").value;
  const second = datelapaz.find((e) => e.type === "second").value;
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
