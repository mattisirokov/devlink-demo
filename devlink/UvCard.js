import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./UvCard.module.css";

export function UvCard({ as: _Component = _Builtin.Block, uvRadial }) {
  return (
    <_Component className={_utils.cx(_styles, "card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "uv-radial-slot")}
        tag="div"
      >
        {uvRadial}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "max-width-full")}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "card-title")} tag="h1">
          {"UV index"}
        </_Builtin.Heading>
      </_Builtin.Block>
    </_Component>
  );
}
