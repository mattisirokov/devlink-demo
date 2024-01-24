import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Graphs.module.css";

export function Graphs({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "card-wrapper", "graphs-card")}
      id={_utils.cx(
        _styles,
        "w-node-_35759e5f-1108-1845-9f15-a440cfa18dac-cfa18dac"
      )}
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "heading", "mb-2")}
        tag="h1"
      >
        {"Graphs for location"}
      </_Builtin.Heading>
      <_Builtin.Block className={_utils.cx(_styles, "graph-slot")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "full-image", "h-full")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
