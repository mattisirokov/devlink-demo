import { HourlyForecastCard } from "../../devlink";

import { formatTimestampToHour } from "@/utils";

import { forecastItem } from "../../types";

interface HourlyForecastCardRowProps {
  forecastData: forecastItem[];
}

export default function HourlyForecastCardRow({
  forecastData,
}: HourlyForecastCardRowProps) {
  return (
    <>
      {forecastData.slice(9, 18).map((item, index) => (
        <HourlyForecastCard
          key={index}
          hour={formatTimestampToHour(item.time)}
          temperature={`${Math.round(item.temp_c)}°C`}
        />
      ))}
    </>
  );
}
