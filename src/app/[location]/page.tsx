import {
  BackgroundImage,
  CurrentConditions,
  Map,
  Overview,
  MultidayForecast,
  TopSpots,
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

const currentTime = new Date().toLocaleString("en-US", {
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

export default async function Location({ params }: any) {
  const data = await getWeatherData(params.location);

  return (
    <>
      <div className={"my-12 mx-auto p-8 ml-8 mr-8 "}>
        <div className={"grid grid-cols-6 gap-8"}>
          <div className={"col-span-4"}>
            <h1 className={"text-6xl text-white"}>{currentTime}</h1>
          </div>
          <div className={"col-span-2"}>
            <input
              className={"h-full w-full rounded-md"}
              type="text"
              placeholder={"Press / to search"}
            />
          </div>
          <div className={"col-span-4"}>
            <CurrentConditions />
          </div>
          <div className={"col-span-2"}>
            <Map />
          </div>
          <div className={"col-span-4"}>
            <Overview />
          </div>
          <div className={"col-span-2"}>
            <MultidayForecast />
          </div>
          <div className={"col-span-4"}>
            <TopSpots />
          </div>
          <div className={"col-span-2"}>
            <Percipitation />
          </div>
        </div>
      </div>
      <BackgroundImage />
    </>
  );
}
