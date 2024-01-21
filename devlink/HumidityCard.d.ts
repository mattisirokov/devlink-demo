import * as React from "react";
import * as Types from "./types";

declare function HumidityCard(props: {
  as?: React.ElementType;
  humidityLevel?: React.ReactNode;
  humidityBar?: Types.Devlink.Slot;
  humidityDisclaimer?: React.ReactNode;
}): React.JSX.Element;
