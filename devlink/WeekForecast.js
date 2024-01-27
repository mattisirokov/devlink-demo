import React from "react";
import * as _Builtin from "./_Builtin";
import { HourlyForecastCard } from "./HourlyForecastCard";
import * as _utils from "./utils";
import _styles from "./WeekForecast.module.css";

export function WeekForecast({
  as: _Component = _Builtin.Block,
  headerText = "Short-term forecast",
  location = "Berlin",
  currentTemperature = "20c",
  currentHumidity = "24%",
  currentWindSpeed = "13mh/h",
  country,
  hourlyForecastSlot,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card-wrapper", "current-forecast")}
      id={_utils.cx(
        _styles,
        "w-node-_8767447b-0d0a-910e-aa68-e695adb40a01-adb40a01"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "top-flex-wrapper")}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "current-conditions")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "icon-full")}
            id={_utils.cx(
              _styles,
              "w-node-_5badc10b-b011-670d-191f-a07e71be88bf-adb40a01"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65b140a1dcb2f927d64d3916/65b1edac97aa12294bf3d2e8_sunny%20icon.webp"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "current-conditions-flex-vertical")}
            id={_utils.cx(
              _styles,
              "w-node-_72045692-3100-cde1-e318-e29217170a60-adb40a01"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading", "lite")}
              tag="h1"
            >
              {location}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "body-text")}
              tag="div"
            >
              {country ?? "Location"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "current-conditions-flex-vertical")}
            id={_utils.cx(
              _styles,
              "w-node-f4159eaa-7664-fb21-da46-7879cba59b8c-adb40a01"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading", "lite")}
              tag="h1"
            >
              {currentTemperature}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "body-text")}
              tag="div"
            >
              {"Temperature"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "current-conditions-flex-vertical")}
            id={_utils.cx(
              _styles,
              "w-node-_12ef7ee6-497a-2547-674f-06e5e260311c-adb40a01"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading", "lite")}
              tag="h1"
            >
              {currentHumidity}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "body-text")}
              tag="div"
            >
              {"Humidity"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "current-conditions-flex-vertical")}
            id={_utils.cx(
              _styles,
              "w-node-_7d0b04b7-8b4a-f58a-ef9a-c11f1724c72b-adb40a01"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading", "lite")}
              tag="h1"
            >
              {currentWindSpeed}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "body-text")}
              tag="div"
            >
              {"Wind Speed"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "bottom-flex-wrapper")}
        tag="div"
      >
        {hourlyForecastSlot ?? <HourlyForecastCard />}
      </_Builtin.Block>
    </_Component>
  );
}
