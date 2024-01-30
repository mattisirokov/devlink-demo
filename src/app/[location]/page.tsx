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

import AutocompleteSearch from "@/components/autocomplete-search/AutocompleteSearch";
import UVRadial from "@/components/UVRadial";
import HourlyForecastRow from "@/components/HourlyForecastRow";
import MultidayForecastRow from "@/components/MultidayForecastRow";
import GoogleMap from "@/components/GoogleMap";
import ChartComponent from "@/components/Chart";

import {
  getDateAndTime,
  dailyHourlyTemperature,
  fiveDayForecast,
} from "@/utils";

import { ForecastDay, WeatherApiResponse } from "../../../types";

async function getWeatherData(location: string): Promise<WeatherApiResponse> {
  const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=${location}&days=14&aqi=no&alerts=no`,
    { cache: "no-store" }
  );
  const data = await response.json();
  http: return data;
}

export default async function Location({ params }: any) {
  const data = await getWeatherData(params.location);

  const { time } = getDateAndTime();

  return (
    <div className={"container"}>
      <div className={"twoColGrid"}>
        <NavHeader headingText={time} localTime={`The local time in ${data.location.name} is ${data.location.localtime}`} />
        <NavSearch searchBoxSlot={<AutocompleteSearch />} />
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
        <Map
          mapSlot={
            <GoogleMap
              longitude={data.location.lon}
              latitude={data.location.lat}
              locationName={data.location.name}
            />
          }
        />
        <Graphs
          header={"14 day UV index forecast"}
          graphSlot={
            <ChartComponent
              labels={data.forecast.forecastday.map(
                (day: ForecastDay) => day.date
              )}
              data={data.forecast.forecastday.map(
                (day: ForecastDay) => day.day.uv
              )}
            />
          }
        />
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
