import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Overview.module.css";

export function Overview({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "overview-wrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "top-wrapper")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "card-title")} tag="h1">
          {"Overview"}
        </_Builtin.Heading>
        <_Builtin.Block tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "button")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Select graph"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "graph-placeholder")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
      />
    </_Component>
  );
}
