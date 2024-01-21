import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HumidityCard.module.css";

export function HumidityCard({
  as: _Component = _Builtin.Block,
  humidityLevel = "24",
  humidityBar,
  humidityDisclaimer = "It's rained this much here recently",
}) {
  return (
    <_Component className={_utils.cx(_styles, "humidity-card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "margin-bottom", "margin-small")}
        tag="div"
      >
        <_Builtin.Grid className={_utils.cx(_styles, "_2-grid")} tag="div">
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-e47b7ead-1106-2d8b-7f34-750880474c92-80474c90"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom", "margin-small")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-tiny")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "card-title",
                    "text-align-left"
                  )}
                  tag="h1"
                >
                  {"Humidity level"}
                </_Builtin.Heading>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom", "margin-small")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "max-width-full")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "stat-grid")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "temperature-value")}
                      tag="h1"
                    >
                      {humidityLevel}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "humidity-bar-slot")}
            id={_utils.cx(
              _styles,
              "w-node-e47b7ead-1106-2d8b-7f34-750880474c9d-80474c90"
            )}
            tag="div"
          >
            {humidityBar}
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "humidity-warning")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "card-disclaimer")}
          tag="h1"
        >
          {humidityDisclaimer}
        </_Builtin.Heading>
      </_Builtin.Block>
    </_Component>
  );
}
