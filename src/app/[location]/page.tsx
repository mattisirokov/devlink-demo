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
      <div>current city: {data.location.name}</div>
      <div>current temp: {data.current.temp_c}</div>
    </>
  );
}
