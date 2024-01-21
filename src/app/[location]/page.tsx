import { TemperatureCard } from "../../../devlink";
import { MapCard } from "../../../devlink";
import { UvCard } from "../../../devlink";
import { HumidityCard } from "../../../devlink";

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
    <>
      <div
        className={
          "grid grid-cols-4 grid-rows-2 gap-8 p-24 bg-black h-screen w-screen"
        }
      >
        <div className={"absolute top-12 left-34 border-2"}>
          <p className={"text-white"}>Search box</p>
        </div>
        <TemperatureCard
          currentTime={data.location.localtime}
          currentTemp={`${Math.round(data.current.temp_c)}°C`}
          curretCondition={data.current.condition.text}
          currentCloud={data.current.cloud}
          currentRainfall={data.current.precip_mm}
          currentWind={data.current.wind_kph}
          currentUv={data.current.uv}
        />
        <UvCard uvRadial={<UVRadial value={data.current.uv} />} />
        <div className={"col-span-2"}>
          <MapCard />
        </div>
        <HumidityCard
          humidityLevel={`${Math.round(data.current.humidity)}%`}
          humidityDisclaimer={`It's percipitated ${data.current.precip_mm}mm in the last hour.`}
          humidityBar={<HumidityBar humidity={data.current.humidity} />}
        />
      </div>
    </>
  );
}
