import { WeatherApiResponse } from "../../types";

async function getWeatherData(): Promise<WeatherApiResponse> {
  const apiKey = process.env.API_KEY;
  const location = "Narva";

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getWeatherData();

  return <div>{data.current.temp_c}</div>;
}
