import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Favorites.module.css";

export function Favorites({ as: _Component = _Builtin.Block, graphSlot }) {
  return (
    <_Component
      className={_utils.cx(_styles, "card-wrapper", "faveriots-card")}
      id={_utils.cx(
        _styles,
        "w-node-c7a90e44-39e0-6723-1a29-815fae838fd2-ae838fd2"
      )}
      tag="div"
    >
      <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h1">
        {"14 day rain prediction"}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(_styles, "graph-slot", "smaller")}
        tag="div"
      >
        {graphSlot}
      </_Builtin.Block>
    </_Component>
  );
}
