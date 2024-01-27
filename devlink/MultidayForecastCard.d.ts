import * as React from "react";
import * as Types from "./types";

declare function MultidayForecastCard(props: {
  as?: React.ElementType;
  date?: React.ReactNode;
  temperature?: React.ReactNode;
  percipitation?: React.ReactNode;
  windSpeed?: React.ReactNode;
}): React.JSX.Element;
