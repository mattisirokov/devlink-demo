import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MultidayForecastCard.module.css";

export function MultidayForecastCard({
  as: _Component = _Builtin.Block,
  date = "16",
  temperature = "20°C",
  percipitation = "49%",
  windSpeed = "13km/h",
}) {
  return (
    <_Component className={_utils.cx(_styles, "forecast-card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "weekly-forecast-item")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "flex-vertical", "flex-apart")}
          id={_utils.cx(
            _styles,
            "w-node-_5c153808-1b8d-1de0-0691-b689f2dcd35c-f2dcd35a"
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading", "forecast-item")}
            tag="h1"
          >
            {date}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
          id={_utils.cx(
            _styles,
            "w-node-_5c153808-1b8d-1de0-0691-b689f2dcd361-f2dcd35a"
          )}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M13.32%2017.4a1.8%201.8%200%200%201-3.452.715%201.801%201.801%200%200%201%201.052-2.412V10.2a.6.6%200%200%201%201.2%200v5.502a1.8%201.8%200%200%201%201.2%201.698Z%22%3E%3C%2Fpath%3E%0A%20%20%3Cpath%20d%3D%22M8.52%205.4a3%203%200%201%201%206%200v9.06a4.2%204.2%200%201%201-6%200V5.4Zm3-1.8a1.8%201.8%200%200%200-1.8%201.8v9.585l-.2.18a3%203%200%201%200%204%200l-.2-.18V5.4a1.8%201.8%200%200%200-1.8-1.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {temperature}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
          id={_utils.cx(
            _styles,
            "w-node-_5c153808-1b8d-1de0-0691-b689f2dcd365-f2dcd35a"
          )}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M6.91%2016.35a.6.6%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm-4.2%201.8a.601.601%200%200%201%20.379.76l-.6%201.8a.6.6%200%200%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.38Zm7.2%200a.601.601%200%200%201%20.379.76l-.6%201.8a.598.598%200%200%201-.973.281.6.6%200%200%201-.165-.66l.6-1.8a.6.6%200%200%201%20.759-.38Zm.896-10.197A6.002%206.002%200%200%200%206.607%206.748a4.2%204.2%200%201%200-.487%208.372h11.4a3.6%203.6%200%200%200%20.486-7.167ZM12.12%204.32a4.8%204.8%200%200%201%204.771%204.266.6.6%200%200%200%20.6.534h.03a2.4%202.4%200%200%201%200%204.8H6.12a2.998%202.998%200%200%201-2.977-3.365%203%203%200%200%201%203.702-2.546.6.6%200%200%200%20.715-.395%204.802%204.802%200%200%201%204.56-3.294Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {percipitation}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "flex-vertical", "gap-0-5")}
          id={_utils.cx(
            _styles,
            "w-node-_5c153808-1b8d-1de0-0691-b689f2dcd369-f2dcd35a"
          )}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "weather-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "body-text")} tag="div">
            {windSpeed}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
