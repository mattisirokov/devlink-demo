import {
  Background,
  WeekForecast,
  Map,
  Graphs,
  WeeklyForecast,
  Favorites,
  WindSpeed,
  NavHeader,
  NavSearch,
} from "../../../devlink";

import DashboardSearch from "@/components/dashboard-search/DashboardSearch";

import { WeatherApiResponse } from "../../../types";

async function getWeatherData(location: string): Promise<WeatherApiResponse> {
  const apiKey = process.env.API_KEY;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
  );
  const data = await response.json();
  return data;
}

export default async function Location({ params }: any) {
  const data = await getWeatherData(params.location);

  return (
    <div className={"container"}>
      <div className={"twoColGrid"}>
        <NavHeader
          headingText={new Date().toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />
        <NavSearch searchBoxSlot={<DashboardSearch />} />
        <WeekForecast
          location={data.location.name}
          currentTemperature={`${data.current.temp_c}°C`}
          currentHumidity={`${data.current.humidity}%`}
          currentWindSpeed={`${data.current.wind_kph}km/h`}
        />
        <Map />
        <Graphs />
        <WeeklyForecast />
        <Favorites />
        <WindSpeed />
      </div>
      <div className={"backgroundWrapper"}>
        <Background
          background={`/assets/${
            data.current.is_day ? "daytime" : "nighttime"
          }.jpeg`}
        />
      </div>
    </div>
  );
}
