import * as React from "react";
import * as Types from "./types";

declare function WeekForecast(props: {
  as?: React.ElementType;
  headerText?: React.ReactNode;
  location?: React.ReactNode;
  currentTemperature?: React.ReactNode;
  currentHumidity?: React.ReactNode;
  currentWindSpeed?: React.ReactNode;
}): React.JSX.Element;
