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
import UVRadial from "@/components/uv-radial/UVRadial";
import HourlyForecastRow from "@/components/hourly-forecast-row/HourlyForecastRow";
import MultidayForecastRow from "@/components/multiday-forecast-row/MultidayForecastRow";

import {
  getDateAndTime,
  dailyHourlyTemperature,
  fiveDayForecast,
} from "@/utils";

import { WeatherApiResponse } from "../../../types";

async function getWeatherData(location: string): Promise<WeatherApiResponse> {
  const apiKey = process.env.WEATHER_API_KEY;

  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`
  );
  const data = await response.json();
  return data;
}

export default async function Location({ params }: any) {
  const data = await getWeatherData(params.location);

  const { time } = getDateAndTime();

  return (
    <div className={"container"}>
      <div className={"twoColGrid"}>
        <NavHeader headingText={time} />
        <NavSearch searchBoxSlot={<DashboardSearch />} />
        <WeekForecast
          location={data.location.name}
          country={data.location.country}
          currentTemperature={`${data.current.temp_c}°C`}
          currentHumidity={`${data.current.humidity}%`}
          currentWindSpeed={`${data.current.wind_kph}km/h`}
          hourlyForecastSlot={
            <HourlyForecastRow forecastData={dailyHourlyTemperature(data)} />
          }
        />
        <Map />
        <Graphs />
        <WeeklyForecast
          multidayForecastSlot={
            <MultidayForecastRow forecastData={fiveDayForecast(data)} />
          }
        />
        <Favorites />
        <WindSpeed uvRadial={<UVRadial value={data.current.uv} />} />
      </div>
      <div className={"backgroundWrapper"}>
        <Background
          backgroundImage={`/assets/${
            data.current.is_day ? "daytime" : "nighttime"
          }.jpeg`}
        />
      </div>
    </div>
  );
}
