import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MapCard.module.css";

export function MapCard({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "map-card")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "map")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65a93b454d212a1b404c3fc8/65ab8d74bf4e48e2d3ac59bb_placeholder.jpeg"
      />
    </_Component>
  );
}
