import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WeekForecast.module.css";

export function WeekForecast({
  as: _Component = _Builtin.Block,
  headerText = "Short-term forecast",
  location = "Berlin",
  currentTemperature = "20c",
  currentHumidity = "24%",
  currentWindSpeed = "13mh/h",
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
              {"Location"}
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
        <_Builtin.Block
          className={_utils.cx(_styles, "current-forecast-item")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"10am"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M11%20.55h2V3.5h-2V.55ZM6.76%204.84l-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM4%2010.5H1v2h3v-2Zm16.45-6.04-1.41-1.41-1.79%201.79%201.41%201.41%201.79-1.79Zm-1.42%2015.5-1.79-1.8%201.4-1.4%201.8%201.79-1.41%201.41ZM23%2010.5h-3v2h3v-2Zm-17%201c0-3.31%202.69-6%206-6s6%202.69%206%206-2.69%206-6%206-6-2.69-6-6Zm7%2010.95V19.5h-2v2.95h2Zm-8.04-2.5-1.41-1.41%201.79-1.8%201.41%201.41-1.79%201.8Z%22%20clip-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"24c"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "current-forecast-item")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"10am"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M11%20.55h2V3.5h-2V.55ZM6.76%204.84l-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM4%2010.5H1v2h3v-2Zm16.45-6.04-1.41-1.41-1.79%201.79%201.41%201.41%201.79-1.79Zm-1.42%2015.5-1.79-1.8%201.4-1.4%201.8%201.79-1.41%201.41ZM23%2010.5h-3v2h3v-2Zm-17%201c0-3.31%202.69-6%206-6s6%202.69%206%206-2.69%206-6%206-6-2.69-6-6Zm7%2010.95V19.5h-2v2.95h2Zm-8.04-2.5-1.41-1.41%201.79-1.8%201.41%201.41-1.79%201.8Z%22%20clip-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"24c"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "current-forecast-item")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"10am"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M11%20.55h2V3.5h-2V.55ZM6.76%204.84l-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM4%2010.5H1v2h3v-2Zm16.45-6.04-1.41-1.41-1.79%201.79%201.41%201.41%201.79-1.79Zm-1.42%2015.5-1.79-1.8%201.4-1.4%201.8%201.79-1.41%201.41ZM23%2010.5h-3v2h3v-2Zm-17%201c0-3.31%202.69-6%206-6s6%202.69%206%206-2.69%206-6%206-6-2.69-6-6Zm7%2010.95V19.5h-2v2.95h2Zm-8.04-2.5-1.41-1.41%201.79-1.8%201.41%201.41-1.79%201.8Z%22%20clip-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"24c"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "current-forecast-item")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"10am"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M11%20.55h2V3.5h-2V.55ZM6.76%204.84l-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM4%2010.5H1v2h3v-2Zm16.45-6.04-1.41-1.41-1.79%201.79%201.41%201.41%201.79-1.79Zm-1.42%2015.5-1.79-1.8%201.4-1.4%201.8%201.79-1.41%201.41ZM23%2010.5h-3v2h3v-2Zm-17%201c0-3.31%202.69-6%206-6s6%202.69%206%206-2.69%206-6%206-6-2.69-6-6Zm7%2010.95V19.5h-2v2.95h2Zm-8.04-2.5-1.41-1.41%201.79-1.8%201.41%201.41-1.79%201.8Z%22%20clip-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"24c"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "current-forecast-item")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"10am"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M11%20.55h2V3.5h-2V.55ZM6.76%204.84l-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM4%2010.5H1v2h3v-2Zm16.45-6.04-1.41-1.41-1.79%201.79%201.41%201.41%201.79-1.79Zm-1.42%2015.5-1.79-1.8%201.4-1.4%201.8%201.79-1.41%201.41ZM23%2010.5h-3v2h3v-2Zm-17%201c0-3.31%202.69-6%206-6s6%202.69%206%206-2.69%206-6%206-6-2.69-6-6Zm7%2010.95V19.5h-2v2.95h2Zm-8.04-2.5-1.41-1.41%201.79-1.8%201.41%201.41-1.79%201.8Z%22%20clip-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"24c"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "current-forecast-item")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"10am"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M11%20.55h2V3.5h-2V.55ZM6.76%204.84l-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM4%2010.5H1v2h3v-2Zm16.45-6.04-1.41-1.41-1.79%201.79%201.41%201.41%201.79-1.79Zm-1.42%2015.5-1.79-1.8%201.4-1.4%201.8%201.79-1.41%201.41ZM23%2010.5h-3v2h3v-2Zm-17%201c0-3.31%202.69-6%206-6s6%202.69%206%206-2.69%206-6%206-6-2.69-6-6Zm7%2010.95V19.5h-2v2.95h2Zm-8.04-2.5-1.41-1.41%201.79-1.8%201.41%201.41-1.79%201.8Z%22%20clip-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"24c"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "current-forecast-item")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"10am"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M11%20.55h2V3.5h-2V.55ZM6.76%204.84l-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM4%2010.5H1v2h3v-2Zm16.45-6.04-1.41-1.41-1.79%201.79%201.41%201.41%201.79-1.79Zm-1.42%2015.5-1.79-1.8%201.4-1.4%201.8%201.79-1.41%201.41ZM23%2010.5h-3v2h3v-2Zm-17%201c0-3.31%202.69-6%206-6s6%202.69%206%206-2.69%206-6%206-6-2.69-6-6Zm7%2010.95V19.5h-2v2.95h2Zm-8.04-2.5-1.41-1.41%201.79-1.8%201.41%201.41-1.79%201.8Z%22%20clip-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"24c"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "current-forecast-item")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"10am"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M11%20.55h2V3.5h-2V.55ZM6.76%204.84l-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM4%2010.5H1v2h3v-2Zm16.45-6.04-1.41-1.41-1.79%201.79%201.41%201.41%201.79-1.79Zm-1.42%2015.5-1.79-1.8%201.4-1.4%201.8%201.79-1.41%201.41ZM23%2010.5h-3v2h3v-2Zm-17%201c0-3.31%202.69-6%206-6s6%202.69%206%206-2.69%206-6%206-6-2.69-6-6Zm7%2010.95V19.5h-2v2.95h2Zm-8.04-2.5-1.41-1.41%201.79-1.8%201.41%201.41-1.79%201.8Z%22%20clip-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"24c"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "current-forecast-item")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"10am"}
          </_Builtin.Block>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M11%20.55h2V3.5h-2V.55ZM6.76%204.84l-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM4%2010.5H1v2h3v-2Zm16.45-6.04-1.41-1.41-1.79%201.79%201.41%201.41%201.79-1.79Zm-1.42%2015.5-1.79-1.8%201.4-1.4%201.8%201.79-1.41%201.41ZM23%2010.5h-3v2h3v-2Zm-17%201c0-3.31%202.69-6%206-6s6%202.69%206%206-2.69%206-6%206-6-2.69-6-6Zm7%2010.95V19.5h-2v2.95h2Zm-8.04-2.5-1.41-1.41%201.79-1.8%201.41%201.41-1.79%201.8Z%22%20clip-rule%3D%22evenodd%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {"24c"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
