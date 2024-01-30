import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavHeader.module.css";

export function NavHeader({
  as: _Component = _Builtin.Block,
  headingText = "Heading",
  headingTime = {},
  localTime = "Location",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "navigation")}
      id={_utils.cx(
        _styles,
        "w-node-_45ea4bd5-862d-091d-1958-0eaa0c4218f3-0c4218f3"
      )}
      tag="div"
    >
      <_Builtin.Block tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h1">
          {headingText}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "body-text", "mt-0-75")}
        tag="div"
      >
        {localTime}
      </_Builtin.Block>
    </_Component>
  );
}
