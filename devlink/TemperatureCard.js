import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TemperatureCard.module.css";

export function TemperatureCard({
  as: _Component = _Builtin.Block,
  currentTime = "18:05",
  currentTemp = "24°c",
  curretCondition = "Sunshine",
  currentCloud = (
    <>
      {"0%"}
      <br />
    </>
  ),
  currentRainfall = (
    <>
      {"0%"}
      <br />
    </>
  ),
  currentWind = (
    <>
      {"0%"}
      <br />
    </>
  ),
  currentUv = (
    <>
      {"0%"}
      <br />
    </>
  ),
}) {
  return (
    <_Component className={_utils.cx(_styles, "card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "margin-bottom", "margin-small")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "margin-bottom", "margin-tiny")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "card-title")}
            tag="h1"
          >
            {"Current conditions"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(_styles, "card-title", "small")}
          tag="h1"
        >
          {currentTime}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "margin-bottom", "margin-small")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "max-width-full")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "stat-grid")} tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "condition-icon")}
              id={_utils.cx(
                _styles,
                "w-node-_339b8490-ab60-93c7-65d8-13b697ea91ef-97ea91e5"
              )}
              loading="lazy"
              width="235"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65a93b454d212a1b404c3fc8/65ab88fb9ea01124095fc516_sunny-removebg-preview.png"
            />
            <_Builtin.Block tag="div">
              <_Builtin.Heading
                className={_utils.cx(_styles, "temperature-value")}
                tag="h1"
              >
                {currentTemp}
              </_Builtin.Heading>
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-size-small",
                    "text-weight-bold",
                    "text-color-white",
                    "text-align-center"
                  )}
                  tag="div"
                >
                  {curretCondition}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "stat-row")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "stat-item")} tag="div">
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "svg-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M11.28%2011.52a4.2%204.2%200%200%201%204.2%204.266.598.598%200%200%200%20.748.59%201.803%201.803%200%200%201%201.724%203.017%201.8%201.8%200%200%201-1.272.527H6.48a2.401%202.401%200%200%201-2.176-3.384A2.4%202.4%200%200%201%206.6%2015.122a.6.6%200%200%200%20.612-.45%204.202%204.202%200%200%201%204.068-3.152Zm5.367%203.6a5.4%205.4%200%200%200-10.464-1.188%203.6%203.6%200%200%200%20.297%207.188h10.2a3%203%200%201%200%200-6h-.033Z%22%3E%3C%2Fpath%3E%0A%20%20%3Cpath%20d%3D%22M15.48%203.72a.6.6%200%200%200-1.2%200v1.2a.6.6%200%201%200%201.2%200v-1.2Zm4.492%202.357a.6.6%200%201%200-.849-.848l-.85.848a.6.6%200%201%200%20.85.85l.849-.85Zm-9.335-.848a.6.6%200%200%200-.848.848l.848.85a.6.6%200%201%200%20.85-.85l-.85-.848Zm2.08%204.048a2.401%202.401%200%201%201%203.956%202.638c.239.337.446.698.62%201.078a3.6%203.6%200%201%200-5.809-3.87%206.62%206.62%200%200%201%201.234.154Zm5.382%204.89c.72.257%201.35.707%201.826%201.286a.6.6%200%200%200%20.047-.89l-.849-.85a.6.6%200%200%200-1.024.453ZM20.28%209.72a.6.6%200%201%200%200%201.2h1.2a.6.6%200%201%200%200-1.2h-1.2Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-size-small",
              "text-weight-bold",
              "text-color-white"
            )}
            tag="div"
          >
            {"Clouds"}
            <br />
            {""}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-size-small",
              "text-weight-bold",
              "text-color-white"
            )}
            tag="div"
          >
            {currentCloud}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "stat-item")} tag="div">
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "svg-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M12%202c-5.33%204.55-8%208.48-8%2011.8%200%204.98%203.8%208.2%208%208.2s8-3.22%208-8.2c0-3.32-2.67-7.25-8-11.8Zm0%2018c-3.35%200-6-2.57-6-6.2%200-2.34%201.95-5.44%206-9.14%204.05%203.7%206%206.79%206%209.14%200%203.63-2.65%206.2-6%206.2Zm-4.17-6c.37%200%20.67.26.74.62.41%202.22%202.28%202.98%203.64%202.87.43-.02.79.32.79.75%200%20.4-.32.73-.72.75-2.13.13-4.62-1.09-5.19-4.12a.75.75%200%200%201%20.74-.87Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-size-small",
              "text-weight-bold",
              "text-color-white"
            )}
            tag="div"
          >
            {"Rainfall"}
            <br />
            {""}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-size-small",
              "text-weight-bold",
              "text-color-white"
            )}
            tag="div"
          >
            {currentRainfall}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "stat-item")} tag="div">
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "svg-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M17.4%204.32a3%203%200%200%200-3%203%20.6.6%200%201%201-1.2%200%204.2%204.2%200%201%201%204.2%204.2H3a.6.6%200%201%201%200-1.2h14.4a3%203%200%201%200%200-6ZM9%205.52a1.2%201.2%200%200%200-1.2%201.2.6.6%200%200%201-1.2%200A2.4%202.4%200%201%201%209%209.12H3a.6.6%200%200%201%200-1.2h6a1.2%201.2%200%201%200%200-2.4Zm-6.6%207.8a.6.6%200%200%201%20.6-.6h12.05a3.6%203.6%200%201%201-3.6%203.6.6.6%200%201%201%201.2%200%202.4%202.4%200%201%200%202.4-2.4H3a.6.6%200%200%201-.6-.6Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-size-small",
              "text-weight-bold",
              "text-color-white"
            )}
            tag="div"
          >
            {"Gust"}
            <br />
            {""}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-size-small",
              "text-weight-bold",
              "text-color-white"
            )}
            tag="div"
          >
            {currentWind}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "stat-item")} tag="div">
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "svg-icon")}
            value="%3Csvg%20width%3D%2246%22%20height%3D%2246%22%20fill%3D%22%23ffffff%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M12%2015.75a3.75%203.75%200%201%201%200-7.5%203.75%203.75%200%200%201%200%207.5ZM12%2017a5%205%200%201%200%200-10%205%205%200%200%200%200%2010Zm0-15a.625.625%200%200%201%20.625.625v2.5a.625.625%200%201%201-1.25%200v-2.5A.625.625%200%200%201%2012%202Zm0%2016.25a.624.624%200%200%201%20.625.625v2.5a.624.624%200%201%201-1.25%200v-2.5A.624.624%200%200%201%2012%2018.25ZM22%2012a.624.624%200%200%201-.625.625h-2.5a.624.624%200%201%201%200-1.25h2.5A.624.624%200%200%201%2022%2012ZM5.75%2012a.625.625%200%200%201-.625.625h-2.5a.625.625%200%201%201%200-1.25h2.5A.625.625%200%200%201%205.75%2012Zm13.321-7.071a.625.625%200%200%201%200%20.883l-1.767%201.77a.626.626%200%200%201-.884-.886l1.767-1.767a.625.625%200%200%201%20.884%200ZM7.58%2016.42a.625.625%200%200%201%200%20.884L5.812%2019.07a.625.625%200%200%201-.883-.884l1.767-1.767a.625.625%200%200%201%20.884%200Zm11.491%202.651a.625.625%200%200%201-.884%200l-1.767-1.767a.625.625%200%200%201%20.884-.884l1.767%201.767a.625.625%200%200%201%200%20.884ZM7.58%207.581a.625.625%200%200%201-.884%200L4.93%205.812a.625.625%200%201%201%20.883-.883L7.58%206.696a.625.625%200%200%201%200%20.885Z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-size-small",
              "text-weight-bold",
              "text-color-white"
            )}
            tag="div"
          >
            {"UV"}
            <br />
            {""}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-size-small",
              "text-weight-bold",
              "text-color-white"
            )}
            tag="div"
          >
            {currentUv}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
