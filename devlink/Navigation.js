import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-591"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bef3e3bd-bda4-b5d6-a207-31b123948816","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bef3e3bd-bda4-b5d6-a207-31b123948816","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626169409644},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-394"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bef3e3bd-bda4-b5d6-a207-31b123948816","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bef3e3bd-bda4-b5d6-a207-31b123948816","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626169409644}},"actionLists":{"a":{"id":"a","title":"Navbar 2 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef37a"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-bottom","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef376"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-bottom","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef376"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef37a"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-middle","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef384"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626225663494},"a-2":{"id":"a-2","title":"Navbar 2 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef37a"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-bottom","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef376"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-bottom","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef376"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef37a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon2_line-middle","selectorGuids":["0cb0470b-5c0f-62dc-3a22-a6a3609ef384"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626226496146}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navigation({
  as: _Component = _Builtin.NavbarWrapper,
  navButton,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar_component")}
      data-w-id="bef3e3bd-bda4-b5d6-a207-31b123948816"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "medium",
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar_container")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "navbar_logo-link")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "navbar2_logo")}
            loading="lazy"
            width="123"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65a93b454d212a1b404c3fc8/65a93b464d212a1b404c4078_logo-webflow-white.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "navbar_menu", "is-page-height-tablet")}
          id={_utils.cx(
            _styles,
            "w-node-bef3e3bd-bda4-b5d6-a207-31b12394881a-23948816"
          )}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navlink")}
            options={{
              href: "#",
            }}
          >
            {"Link One"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navlink")}
            options={{
              href: "#",
            }}
          >
            {"Link Two"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navlink")}
            options={{
              href: "#",
            }}
          >
            {"Link Three"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_button_slot")}
          id={_utils.cx(
            _styles,
            "w-node-bef3e3bd-bda4-b5d6-a207-31b123948821-23948816"
          )}
          tag="div"
        >
          {navButton ?? (
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "navbar_menu-button")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon_line-top")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon2_line-middle")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "menu-icon_line-middle-inner"
                    )}
                    tag="div"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon2_line-bottom")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.NavbarButton>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
