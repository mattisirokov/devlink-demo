import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./GitHub.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706715785129}},"actionLists":{"a":{"id":"a","title":"Show GitHub popup","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ae8043fa-4eb3-f460-f854-fb14a811540e"},"xValue":800,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1500,"easing":"inOutExpo","duration":750,"target":{"id":"ae8043fa-4eb3-f460-f854-fb14a811540e"},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1706715792564}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GitHub({ as: _Component = _Builtin.Link }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "github-wrapper")}
      data-w-id="ae8043fa-4eb3-f460-f854-fb14a811540e"
      button={false}
      block="inline"
      options={{
        href: "https://github.com/mattisirokov",
        target: "_blank",
      }}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "github-logo")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65b140a1dcb2f927d64d3916/65ba682ae5c9c6a01c281957_GitHub-Mark-ea2971cee799.png"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "text-size-medium", "text-color-black")}
        tag="div"
      >
        {"Check out the code on GitHub"}
      </_Builtin.Block>
    </_Component>
  );
}
