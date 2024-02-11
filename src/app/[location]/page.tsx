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
import UVChart from "@/components/UVChart";
import RainChart from "@/components/RainChart";

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
  const { location, current, forecast } = data;

  const { time } = getDateAndTime();

  return (
    <div className={"container"}>
      <div className={"twoColGrid"}>
        <NavHeader
          headingText={time}
          localTime={`The local time in ${location.name} is ${location.localtime}`}
        />
        <NavSearch searchBoxSlot={<AutocompleteSearch />} />
        <WeekForecast
          location={location.name}
          country={location.country}
          currentTemperature={`${current.temp_c}°C`}
          currentHumidity={`${current.humidity}%`}
          currentWindSpeed={`${current.wind_kph}km/h`}
          hourlyForecastSlot={
            <HourlyForecastRow forecastData={dailyHourlyTemperature(data)} />
          }
        />
        <Map
          mapSlot={
            <GoogleMap
              longitude={location.lon}
              latitude={location.lat}
              locationName={location.name}
            />
          }
        />
        <Graphs
          header={"14 day UV index forecast"}
          graphSlot={
            <UVChart
              labels={forecast.forecastday.map((day: ForecastDay) => day.date)}
              data={forecast.forecastday.map((day: ForecastDay) => day.day.uv)}
            />
          }
        />
        <WeeklyForecast
          multidayForecastSlot={
            <MultidayForecastRow forecastData={fiveDayForecast(data)} />
          }
        />
        <Favorites
          graphSlot={
            <RainChart
              labels={forecast.forecastday.map((day: ForecastDay) => day.date)}
              data={forecast.forecastday.map(
                (day: ForecastDay) => day.day.daily_chance_of_rain
              )}
            />
          }
        />
        <WindSpeed uvRadial={<UVRadial value={current.uv} />} />
      </div>
      <div className={"backgroundWrapper"}>
        <Background
          backgroundImage={`/assets/${
            current.is_day ? "daytime" : "nighttime"
          }.jpeg`}
        />
      </div>
    </div>
  );
}
