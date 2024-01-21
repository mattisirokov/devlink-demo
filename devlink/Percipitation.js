import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Percipitation.module.css";

export function Percipitation({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "component-card", "forecast-card")}
      id={_utils.cx(
        _styles,
        "w-node-_4a4f0081-e647-e0f0-dff6-2aa22b41e614-2b41e614"
      )}
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(
          _styles,
          "card-title",
          "margin-bottom",
          "margin-small"
        )}
        tag="h1"
      >
        {"Chance of percipitation"}
      </_Builtin.Heading>
    </_Component>
  );
}
