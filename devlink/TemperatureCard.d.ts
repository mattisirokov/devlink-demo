import * as React from "react";
import * as Types from "./types";

declare function TemperatureCard(props: {
  as?: React.ElementType;
  currentTime?: React.ReactNode;
  currentTemp?: React.ReactNode;
  curretCondition?: React.ReactNode;
  currentCloud?: React.ReactNode;
  currentRainfall?: React.ReactNode;
  currentWind?: React.ReactNode;
  currentUv?: React.ReactNode;
}): React.JSX.Element;
