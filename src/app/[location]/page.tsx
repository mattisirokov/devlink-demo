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
          headingText={`${data.location.name}, ${data.location.country}`}
        />
        <NavSearch />
        <WeekForecast headerText={data.location.localtime} />
        <Map />
        <Graphs />
        <WeeklyForecast />
        <Favorites />
        <WindSpeed />
      </div>
      <div className={"backgroundWrapper"}>
        <Background />
      </div>
    </div>
  );
}
