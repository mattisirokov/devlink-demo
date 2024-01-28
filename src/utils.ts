import { ForecastDay, WeatherApiResponse } from "../types";

export function getDateAndTime() {
  const date = new Date();
  const dateObj = new Date(date);
  const day = dateObj.toLocaleString("default", { weekday: "long" });
  const time = dateObj.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return { day, time };
}

export function formatTimestampToHour(time: string) {
  const date = new Date(time);
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function formatDateToDayMonth(date: string) {
  const dateObj = new Date(date);
  const day = dateObj.toLocaleString("default", { day: "numeric" });
  const month = dateObj.toLocaleString("default", { month: "numeric" });
  return `${day}.${month}`;
}

export function dailyHourlyTemperature(apiResponse: WeatherApiResponse) {
  if (!apiResponse.forecast.forecastday.length) {
    return [];
  }
  return apiResponse.forecast.forecastday[0].hour.map((hour) => ({
    time: hour.time,
    temp_c: hour.temp_c,
    icon: hour.condition.icon,
  }));
}

export function fiveDayForecast(apiResponse: WeatherApiResponse) {
  if (!apiResponse.forecast.forecastday.length) {
    return [];
  }
  return apiResponse.forecast.forecastday
    .slice(0, 5)
    .map((day: ForecastDay) => ({
      date: day.date,
      avgtemp_c: day.day.avgtemp_c,
      totalprecip_mm: day.day.totalprecip_mm,
      maxwind_kph: day.day.maxwind_kph,
    }));
}
