import React from "react";
import * as _Builtin from "./_Builtin";

export function Button({ as: _Component = _Builtin.Link, buttonClick = {} }) {
  return (
    <_Component
      button={true}
      block=""
      options={{
        href: "#",
      }}
      {...buttonClick}
    >
      {"Button Text"}
    </_Component>
  );
}
