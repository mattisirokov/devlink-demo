import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WeekForecast.module.css";

export function WeekForecast({
  as: _Component = _Builtin.Block,
  headerText = "Short-term forecast",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card-wrapper")}
      id={_utils.cx(
        _styles,
        "w-node-_8767447b-0d0a-910e-aa68-e695adb40a01-adb40a01"
      )}
      tag="div"
    >
      <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h1">
        {headerText}
      </_Builtin.Heading>
    </_Component>
  );
}
