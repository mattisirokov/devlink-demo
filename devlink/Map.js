import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Map.module.css";

export function Map({ as: _Component = _Builtin.Image }) {
  return (
    <_Component
      className={_utils.cx(_styles, "map")}
      loading="lazy"
      width="70"
      height="auto"
      alt=""
      src="https://uploads-ssl.webflow.com/65a93b454d212a1b404c3fc8/65ab8d74bf4e48e2d3ac59bb_placeholder.jpeg"
    />
  );
}
