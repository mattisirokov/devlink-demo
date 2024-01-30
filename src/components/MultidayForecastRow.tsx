import { MultidayForecastCard } from "../../devlink";

import { formatDateToDayMonth } from "@/utils";

import { FiveDayForecastItem } from "../../types";

interface MultidayForecastCardProps {
  forecastData: FiveDayForecastItem[];
}

export default function MultidayForecastRow({
  forecastData,
}: MultidayForecastCardProps) {
  return (
    <>
      {forecastData.map((item, index) => (
        <MultidayForecastCard
          key={index}
          date={formatDateToDayMonth(item.date)}
          temperature={`${item.avgtemp_c}°C`}
          percipitation={`${item.totalprecip_mm}%`}
          windSpeed={`${item.maxwind_kph}kmh/h`}
        />
      ))}
    </>
  );
}
