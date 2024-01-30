import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavSearch.module.css";

export function NavSearch({
  as: _Component = _Builtin.Block,
  searchBoxSlot,
  commandPaletteSlot = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "search-wrapper")}
      id={_utils.cx(
        _styles,
        "w-node-_14b4bb94-839c-c3a9-a363-c2d50b5c10ff-0b5c10ff"
      )}
      tag="div"
    >
      {searchBoxSlot}
    </_Component>
  );
}
