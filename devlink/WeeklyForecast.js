import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WeeklyForecast.module.css";

export function WeeklyForecast({ as: _Component = _Builtin.Block }) {
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
        <_Builtin.Block
          className={_utils.cx(_styles, "forecast-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "weekly-forecast-item")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "flex-apart")}
              id={_utils.cx(
                _styles,
                "w-node-_05f44f6e-3f20-8b9e-64d7-8b91491047be-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading", "lite")}
                tag="h1"
              >
                {"16"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"Monday"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_6fc4f470-199a-145f-8551-a6c6400283a6-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"20°C"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-b05ac78a-b18d-7158-f0e9-ae63207ae1d5-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M6.91%2016.35a.6.6%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm-4.2%201.8a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.598.598%200%200%201-.973.281.6.6%200%200%201-.165-.66l.6-1.8a.6.6%200%200%201%20.759-.38Zm.896-10.197A6.002%206.002%200%200%200%206.607%206.748a4.2%204.2%200%201%200-.487%208.372h11.4a3.6%203.6%200%200%200%20.486-7.167ZM12.12%204.32a4.8%204.8%200%200%201%204.771%204.266.6.6%200%200%200%20.6.534h.03a2.4%202.4%200%200%201%200%204.8H6.12a2.998%202.998%200%200%201-2.977-3.365%203%203%200%200%201%203.702-2.546.6.6%200%200%200%20.715-.395%204.802%204.802%200%200%201%204.56-3.294Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"49%"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_54c8df43-2b2a-f73a-b7aa-60b2af14df51-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"13km/h"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "forecast-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "weekly-forecast-item")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "flex-apart")}
              id={_utils.cx(
                _styles,
                "w-node-_85597326-c4dc-832f-ce63-ef6f5ea78286-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading", "lite")}
                tag="h1"
              >
                {"16"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"Monday"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_85597326-c4dc-832f-ce63-ef6f5ea7828b-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"20°C"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_85597326-c4dc-832f-ce63-ef6f5ea7828f-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M6.91%2016.35a.6.6%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm-4.2%201.8a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.598.598%200%200%201-.973.281.6.6%200%200%201-.165-.66l.6-1.8a.6.6%200%200%201%20.759-.38Zm.896-10.197A6.002%206.002%200%200%200%206.607%206.748a4.2%204.2%200%201%200-.487%208.372h11.4a3.6%203.6%200%200%200%20.486-7.167ZM12.12%204.32a4.8%204.8%200%200%201%204.771%204.266.6.6%200%200%200%20.6.534h.03a2.4%202.4%200%200%201%200%204.8H6.12a2.998%202.998%200%200%201-2.977-3.365%203%203%200%200%201%203.702-2.546.6.6%200%200%200%20.715-.395%204.802%204.802%200%200%201%204.56-3.294Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"49%"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_85597326-c4dc-832f-ce63-ef6f5ea78293-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"13km/h"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "forecast-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "weekly-forecast-item")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "flex-apart")}
              id={_utils.cx(
                _styles,
                "w-node-_6fa94f4f-a834-38a0-8333-3d3d01cf6d3d-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading", "lite")}
                tag="h1"
              >
                {"16"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"Monday"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_6fa94f4f-a834-38a0-8333-3d3d01cf6d42-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"20°C"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_6fa94f4f-a834-38a0-8333-3d3d01cf6d46-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M6.91%2016.35a.6.6%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm-4.2%201.8a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.598.598%200%200%201-.973.281.6.6%200%200%201-.165-.66l.6-1.8a.6.6%200%200%201%20.759-.38Zm.896-10.197A6.002%206.002%200%200%200%206.607%206.748a4.2%204.2%200%201%200-.487%208.372h11.4a3.6%203.6%200%200%200%20.486-7.167ZM12.12%204.32a4.8%204.8%200%200%201%204.771%204.266.6.6%200%200%200%20.6.534h.03a2.4%202.4%200%200%201%200%204.8H6.12a2.998%202.998%200%200%201-2.977-3.365%203%203%200%200%201%203.702-2.546.6.6%200%200%200%20.715-.395%204.802%204.802%200%200%201%204.56-3.294Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"49%"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_6fa94f4f-a834-38a0-8333-3d3d01cf6d4a-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"13km/h"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "forecast-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "weekly-forecast-item")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "flex-apart")}
              id={_utils.cx(
                _styles,
                "w-node-_7b49184a-6103-d806-78d8-afdf3c59430a-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading", "lite")}
                tag="h1"
              >
                {"16"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"Monday"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_7b49184a-6103-d806-78d8-afdf3c59430f-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"20°C"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_7b49184a-6103-d806-78d8-afdf3c594313-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M6.91%2016.35a.6.6%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm-4.2%201.8a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.598.598%200%200%201-.973.281.6.6%200%200%201-.165-.66l.6-1.8a.6.6%200%200%201%20.759-.38Zm.896-10.197A6.002%206.002%200%200%200%206.607%206.748a4.2%204.2%200%201%200-.487%208.372h11.4a3.6%203.6%200%200%200%20.486-7.167ZM12.12%204.32a4.8%204.8%200%200%201%204.771%204.266.6.6%200%200%200%20.6.534h.03a2.4%202.4%200%200%201%200%204.8H6.12a2.998%202.998%200%200%201-2.977-3.365%203%203%200%200%201%203.702-2.546.6.6%200%200%200%20.715-.395%204.802%204.802%200%200%201%204.56-3.294Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"49%"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_7b49184a-6103-d806-78d8-afdf3c594317-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"13km/h"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "forecast-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "weekly-forecast-item")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "flex-apart")}
              id={_utils.cx(
                _styles,
                "w-node-_678b6de1-5a60-1550-2c13-5dc2d2822bc4-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading", "lite")}
                tag="h1"
              >
                {"16"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"Monday"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_678b6de1-5a60-1550-2c13-5dc2d2822bc9-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"20°C"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_678b6de1-5a60-1550-2c13-5dc2d2822bcd-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M6.91%2016.35a.6.6%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm-4.2%201.8a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.598.598%200%200%201-.973.281.6.6%200%200%201-.165-.66l.6-1.8a.6.6%200%200%201%20.759-.38Zm.896-10.197A6.002%206.002%200%200%200%206.607%206.748a4.2%204.2%200%201%200-.487%208.372h11.4a3.6%203.6%200%200%200%20.486-7.167ZM12.12%204.32a4.8%204.8%200%200%201%204.771%204.266.6.6%200%200%200%20.6.534h.03a2.4%202.4%200%200%201%200%204.8H6.12a2.998%202.998%200%200%201-2.977-3.365%203%203%200%200%201%203.702-2.546.6.6%200%200%200%20.715-.395%204.802%204.802%200%200%201%204.56-3.294Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"49%"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
              id={_utils.cx(
                _styles,
                "w-node-_678b6de1-5a60-1550-2c13-5dc2d2822bd1-eeb7fe25"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "body-text")}
                tag="div"
              >
                {"13km/h"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
