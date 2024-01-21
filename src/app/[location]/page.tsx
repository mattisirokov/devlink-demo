import {
  CurrentConditions,
  Map,
  Charts,
  MultiDayForecast,
  Faveriots,
  Percipitation,
} from "../../../devlink";

import UVRadial from "@/components/UVRadial";
import HumidityBar from "@/components/HumidityBar";

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
    <div
      className={"grid grid-cols-2 grid-rows-2 gap-8 p-24 bg-black w-screen"}
    >
      <CurrentConditions />
      <Map />
      <Charts />
      <MultiDayForecast />
      <Faveriots />
      <Percipitation />
    </div>
  );
}
