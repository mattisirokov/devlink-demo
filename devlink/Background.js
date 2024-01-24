import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Background.module.css";

export function Background({ as: _Component = _Builtin.Block }) {
  return <_Component className={_utils.cx(_styles, "bg-wrapper")} tag="div" />;
}
