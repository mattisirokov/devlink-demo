import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MultidayForecast.module.css";

export function MultidayForecast({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "multiday-wrapper")} tag="div">
      <_Builtin.Heading
        className={_utils.cx(
          _styles,
          "card-title",
          "margin-bottom",
          "margin-small"
        )}
        tag="h1"
      >
        {"3-day forecast"}
      </_Builtin.Heading>
      <_Builtin.Grid className={_utils.cx(_styles, "forecast-grid")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "daily-forecast-card")}
          id={_utils.cx(
            _styles,
            "w-node-_88e21dd1-54ce-87de-011d-485542b50461-42b5045d"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "flex-items")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "display-inlineflex",
                "flex-align-center",
                "gap-0-5"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "card-text-medium")}
                tag="h1"
              >
                {"20c"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "display-inlineflex",
                "flex-align-center",
                "gap-0-5"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "card-text-medium")}
                tag="h1"
              >
                {"13km/h"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "display-inlineflex",
                "flex-align-center",
                "gap-0-5"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M5.11%2015.632a.6.6%200%200%201%20.379.758l-.6%201.8a.6.6%200%201%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.378Zm11.4%200a.6.6%200%200%201%20.379.758l-.6%201.8a.597.597%200%200%201-.766.401.6.6%200%200%201-.372-.78l.6-1.8a.6.6%200%200%201%20.759-.38Zm-9%201.8a.6.6%200%200%201%20.379.758l-.6%201.8a.6.6%200%201%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.378Zm11.4%200a.6.6%200%200%201%20.379.758l-.6%201.8a.597.597%200%200%201-.766.401.6.6%200%200%201-.372-.78l.6-1.8a.6.6%200%200%201%20.759-.38Zm-.904-10.2A6%206%200%200%200%206.607%206.029%204.2%204.2%200%201%200%206.12%2014.4h11.4a3.6%203.6%200%200%200%20.486-7.167ZM12.12%203.6a4.8%204.8%200%200%201%204.771%204.266.6.6%200%200%200%20.6.534h.03a2.4%202.4%200%200%201%200%204.8H6.12a3%203%200%201%201%20.725-5.91.6.6%200%200%200%20.715-.396A4.802%204.802%200%200%201%2012.12%203.6Zm-1.736%2012.332a.6.6%200%200%201%20.536-.332h1.2a.6.6%200%200%201%20.569.79l-.336%201.01h.967a.6.6%200%200%201%20.468.975l-2.4%203a.6.6%200%200%201-1.05-.52l.414-1.654H9.72a.598.598%200%200%201-.536-.87l1.2-2.4Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "card-text-medium")}
                tag="h1"
              >
                {"49%"}
              </_Builtin.Heading>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "display-inlineflex",
              "flex-align-center",
              "gap-1"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "card-text-large")}
              tag="h1"
            >
              {"16"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "card-header")}
              tag="div"
            >
              {"January"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "daily-forecast-card")}
          id={_utils.cx(
            _styles,
            "w-node-_88e21dd1-54ce-87de-011d-485542b50474-42b5045d"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "flex-items")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "display-inlineflex",
                "flex-align-center",
                "gap-0-5"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "card-text-medium")}
                tag="h1"
              >
                {"20c"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "display-inlineflex",
                "flex-align-center",
                "gap-0-5"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "card-text-medium")}
                tag="h1"
              >
                {"13km/h"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "display-inlineflex",
                "flex-align-center",
                "gap-0-5"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M5.11%2015.632a.6.6%200%200%201%20.379.758l-.6%201.8a.6.6%200%201%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.378Zm11.4%200a.6.6%200%200%201%20.379.758l-.6%201.8a.597.597%200%200%201-.766.401.6.6%200%200%201-.372-.78l.6-1.8a.6.6%200%200%201%20.759-.38Zm-9%201.8a.6.6%200%200%201%20.379.758l-.6%201.8a.6.6%200%201%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.378Zm11.4%200a.6.6%200%200%201%20.379.758l-.6%201.8a.597.597%200%200%201-.766.401.6.6%200%200%201-.372-.78l.6-1.8a.6.6%200%200%201%20.759-.38Zm-.904-10.2A6%206%200%200%200%206.607%206.029%204.2%204.2%200%201%200%206.12%2014.4h11.4a3.6%203.6%200%200%200%20.486-7.167ZM12.12%203.6a4.8%204.8%200%200%201%204.771%204.266.6.6%200%200%200%20.6.534h.03a2.4%202.4%200%200%201%200%204.8H6.12a3%203%200%201%201%20.725-5.91.6.6%200%200%200%20.715-.396A4.802%204.802%200%200%201%2012.12%203.6Zm-1.736%2012.332a.6.6%200%200%201%20.536-.332h1.2a.6.6%200%200%201%20.569.79l-.336%201.01h.967a.6.6%200%200%201%20.468.975l-2.4%203a.6.6%200%200%201-1.05-.52l.414-1.654H9.72a.598.598%200%200%201-.536-.87l1.2-2.4Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "card-text-medium")}
                tag="h1"
              >
                {"49%"}
              </_Builtin.Heading>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "display-inlineflex",
              "flex-align-center",
              "gap-1"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "card-text-large")}
              tag="h1"
            >
              {"16"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "card-header")}
              tag="div"
            >
              {"January"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "daily-forecast-card")}
          id={_utils.cx(
            _styles,
            "w-node-_88e21dd1-54ce-87de-011d-485542b50487-42b5045d"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "flex-items")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "display-inlineflex",
                "flex-align-center",
                "gap-0-5"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22m6.76%205.34-1.8-1.79-1.41%201.41%201.79%201.79%201.42-1.41ZM1%2011h3v2H1v-2Zm10-9.95h2V4h-2V1.05Zm8.04%202.495%201.408%201.407-1.79%201.79-1.407-1.408%201.789-1.789Zm-1.8%2015.115%201.79%201.8%201.41-1.41-1.8-1.79-1.4%201.4ZM20%2011h3v2h-3v-2Zm-8-5c-3.31%200-6%202.69-6%206s2.69%206%206%206%206-2.69%206-6-2.69-6-6-6Zm0%2010c-2.21%200-4-1.79-4-4s1.79-4%204-4%204%201.79%204%204-1.79%204-4%204Zm-1%204h2v2.95h-2V20Zm-7.45-.96%201.41%201.41%201.79-1.8-1.41-1.41-1.79%201.8Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "card-text-medium")}
                tag="h1"
              >
                {"20c"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "display-inlineflex",
                "flex-align-center",
                "gap-0-5"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "card-text-medium")}
                tag="h1"
              >
                {"13km/h"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "display-inlineflex",
                "flex-align-center",
                "gap-0-5"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "weather-icon")}
                value="%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22white%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M5.11%2015.632a.6.6%200%200%201%20.379.758l-.6%201.8a.6.6%200%201%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.378Zm11.4%200a.6.6%200%200%201%20.379.758l-.6%201.8a.597.597%200%200%201-.766.401.6.6%200%200%201-.372-.78l.6-1.8a.6.6%200%200%201%20.759-.38Zm-9%201.8a.6.6%200%200%201%20.379.758l-.6%201.8a.6.6%200%201%201-1.138-.38l.6-1.8a.6.6%200%200%201%20.759-.378Zm11.4%200a.6.6%200%200%201%20.379.758l-.6%201.8a.597.597%200%200%201-.766.401.6.6%200%200%201-.372-.78l.6-1.8a.6.6%200%200%201%20.759-.38Zm-.904-10.2A6%206%200%200%200%206.607%206.029%204.2%204.2%200%201%200%206.12%2014.4h11.4a3.6%203.6%200%200%200%20.486-7.167ZM12.12%203.6a4.8%204.8%200%200%201%204.771%204.266.6.6%200%200%200%20.6.534h.03a2.4%202.4%200%200%201%200%204.8H6.12a3%203%200%201%201%20.725-5.91.6.6%200%200%200%20.715-.396A4.802%204.802%200%200%201%2012.12%203.6Zm-1.736%2012.332a.6.6%200%200%201%20.536-.332h1.2a.6.6%200%200%201%20.569.79l-.336%201.01h.967a.6.6%200%200%201%20.468.975l-2.4%203a.6.6%200%200%201-1.05-.52l.414-1.654H9.72a.598.598%200%200%201-.536-.87l1.2-2.4Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "card-text-medium")}
                tag="h1"
              >
                {"49%"}
              </_Builtin.Heading>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "display-inlineflex",
              "flex-align-center",
              "gap-1"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "card-text-large")}
              tag="h1"
            >
              {"16"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "card-header")}
              tag="div"
            >
              {"January"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Grid>
    </_Component>
  );
}
