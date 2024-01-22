import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TopSpots.module.css";

export function TopSpots({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "faveriots-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "top-wrapper", "bottm-margin-m")}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "card-title")} tag="h1">
          {"Your saved spots"}
        </_Builtin.Heading>
        <_Builtin.Block tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "button")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Add city"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "fav-places-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "faveriot-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "display-inlineflex",
              "flex-vertical",
              "gap-0-5"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "card-header")}
              tag="div"
            >
              {"Tallinn"}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "card-text-small")}
              tag="h1"
            >
              {"Estonia"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "card-text-large")}
            tag="h1"
          >
            {"20c"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "fav-weather-icon")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "weather-icon")}
              value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22black%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "faveriot-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "display-inlineflex",
              "flex-vertical",
              "gap-0-5"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "card-header")}
              tag="div"
            >
              {"Lisbon"}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "card-text-small")}
              tag="h1"
            >
              {"Estonia"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "card-text-large")}
            tag="h1"
          >
            {"20c"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "fav-weather-icon")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "weather-icon")}
              value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22black%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "faveriot-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "display-inlineflex",
              "flex-vertical",
              "gap-0-5"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "card-header")}
              tag="div"
            >
              {"Key West"}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "card-text-small")}
              tag="h1"
            >
              {"Estonia"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "card-text-large")}
            tag="h1"
          >
            {"20c"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "fav-weather-icon")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "weather-icon")}
              value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22black%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "faveriot-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "display-inlineflex",
              "flex-vertical",
              "gap-0-5"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "card-header")}
              tag="div"
            >
              {"Tallinn"}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "card-text-small")}
              tag="h1"
            >
              {"Estonia"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "card-text-large")}
            tag="h1"
          >
            {"20c"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "fav-weather-icon")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "weather-icon")}
              value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22black%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
