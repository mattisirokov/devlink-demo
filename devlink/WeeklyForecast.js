import React from "react";
import * as _Builtin from "./_Builtin";
import { MultidayForecastCard } from "./MultidayForecastCard";
import * as _utils from "./utils";
import _styles from "./WeeklyForecast.module.css";

export function WeeklyForecast({
  as: _Component = _Builtin.Block,
  multidayForecastSlot,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card-wrapper", "flex-vertical")}
      id={_utils.cx(
        _styles,
        "w-node-_35b46b72-b359-9d5c-f90c-77a0eeb7fe25-eeb7fe25"
      )}
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "heading", "mb-2")}
        tag="h1"
      >
        {"5 day forecast"}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "forecast-wrapper")}
        tag="div"
      >
        {multidayForecastSlot ?? (
          <>
            <MultidayForecastCard />
            <MultidayForecastCard />
            <MultidayForecastCard />
            <MultidayForecastCard />
            <MultidayForecastCard />
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
