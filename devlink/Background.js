import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Background.module.css";

export function Background({
  as: _Component = _Builtin.Block,
  backgroundImage = "https://uploads-ssl.webflow.com/65b140a1dcb2f927d64d3916/65b1feeb3f50878a3d04c7a1_nighttime.jpeg",
}) {
  return (
    <_Component className={_utils.cx(_styles, "bg-wrapper")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "bg-image")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={backgroundImage}
      />
    </_Component>
  );
}
