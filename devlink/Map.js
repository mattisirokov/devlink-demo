import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Map.module.css";

export function Map({ as: _Component = _Builtin.Block, mapSlot }) {
  return (
    <_Component
      className={_utils.cx(_styles, "card-wrapper", "no-padding")}
      id={_utils.cx(
        _styles,
        "w-node-b3aca6ed-dcf5-b43f-422b-d4d2d7d8a9d3-d7d8a9d3"
      )}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "map-wrapper")} tag="div">
        {mapSlot}
      </_Builtin.Block>
    </_Component>
  );
}
