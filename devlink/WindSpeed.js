import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WindSpeed.module.css";

export function WindSpeed({ as: _Component = _Builtin.Block, uvRadial }) {
  return (
    <_Component
      className={_utils.cx(_styles, "card-wrapper", "uv-card")}
      id={_utils.cx(
        _styles,
        "w-node-c06c4fed-db00-d540-3982-c3711186c706-1186c706"
      )}
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "heading", "mb-2")}
        tag="h1"
      >
        {"Current UV index"}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "uv-radial-wrapper")}
        tag="div"
      >
        {uvRadial}
      </_Builtin.Block>
    </_Component>
  );
}
