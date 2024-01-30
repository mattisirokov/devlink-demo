import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

export function Hero({ as: _Component = _Builtin.Block, searchSlot }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="header">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "header115_component")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "padding-section-large")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "header115_content-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "header115_content-left")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-medium",
                      "text-color-white",
                      "text-align-left"
                    )}
                  >
                    {
                      "This is a project made to demontrate the power of DevLink, paired with Client First, NextJS making it a valid tech stack for quick prototyping. Go ahead and enter a city or country to see a weather dashboard. "
                    }
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header115_content-right")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_55a714fa-9422-773e-b4b1-677afdb1cbc1-fdb1cbb8"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heer-header")}
                    tag="h1"
                  >
                    {
                      "The only place you should be checking the weather - at least while working on this project"
                    }
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-top",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "saerch-slot")}
                      tag="div"
                    >
                      {searchSlot}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "header8_background-video-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "video-overlay-layer")}
          tag="div"
        />
        <_Builtin.BackgroundVideoWrapper
          className={_utils.cx(_styles, "header8_background-video")}
          tag="div"
          data-beta-bgvideo-upgrade={false}
          sources={[
            "https://uploads-ssl.webflow.com/65b140a1dcb2f927d64d3916/65b8a093d81c2eb031f24b2c_Weather Background-transcode.webm",
            "https://uploads-ssl.webflow.com/65b140a1dcb2f927d64d3916/65b8a093d81c2eb031f24b2c_Weather Background-transcode.mp4",
          ]}
          posterImage="https://uploads-ssl.webflow.com/65b140a1dcb2f927d64d3916/65b8a093d81c2eb031f24b2c_Weather Background-poster-00001.jpg"
          autoPlay={true}
          loop={true}
        />
      </_Builtin.Block>
    </_Component>
  );
}
