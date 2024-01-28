import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HomeHero.module.css";

export function HomeHero({
  as: _Component = _Builtin.Block,
  searchSlot,
  heroText = "The only place you should be checking the weather atm.",
  heroDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "hero-section")} tag="header">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "header8_content")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "padding-section-large")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "max-width-medium")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading className={_utils.cx(_styles, "")} tag="h1">
                    {heroText}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "text-size-medium",
                    "text-color-white"
                  )}
                >
                  {heroDescription}
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "search-slot")}
                  tag="div"
                >
                  {searchSlot}
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
            "https://uploads-ssl.webflow.com/65b140a1dcb2f927d64d3916/65b148bc0d7ec7d47543fa9d_bg-video-transcode.webm",
            "https://uploads-ssl.webflow.com/65b140a1dcb2f927d64d3916/65b148bc0d7ec7d47543fa9d_bg-video-transcode.mp4",
          ]}
          posterImage="https://uploads-ssl.webflow.com/65b140a1dcb2f927d64d3916/65b148bc0d7ec7d47543fa9d_bg-video-poster-00001.jpg"
          autoPlay={true}
          loop={true}
        />
      </_Builtin.Block>
    </_Component>
  );
}
