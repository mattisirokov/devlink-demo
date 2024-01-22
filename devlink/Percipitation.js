import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Percipitation.module.css";

export function Percipitation({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "percipitation-wrapper")}
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
