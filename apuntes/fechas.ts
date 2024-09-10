import dayjs from "dayjs";

const dayInit: dayjs.Dayjs = dayjs("2025-01-01");
const dayEnd: dayjs.Dayjs = dayjs("2025-01-31");

const days: number = dayEnd.diff(dayInit, "day");

console.log(days);
