import * as React from "react";
import * as Types from "./types";

declare function HourlyForecastCard(props: {
  as?: React.ElementType;
  hour?: Types.Devlink.Slot;
  temperature?: Types.Devlink.Slot;
}): React.JSX.Element;
