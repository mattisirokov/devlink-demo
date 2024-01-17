import Search from "@/components/Search";

import { WeatherApiResponse } from "../../types";

async function getWeatherData(location: string): Promise<WeatherApiResponse> {
  const apiKey = process.env.API_KEY;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
  );
  const data = await response.json();
  return data;
}

export default async function Home({ searchParams }: any) {
  const data = await getWeatherData(searchParams.location);

  return (
    <>
      <Search />
      <div>current city: {data.location.name}</div>
      <div>Current temperature: {data.current.temp_c}°C</div>
    </>
  );
}
