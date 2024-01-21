import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroSection.module.css";

export function HeroSection({
  as: _Component = _Builtin.Block,
  heroHeader = "Legit the only place you should check the weather",
  searchBox,
  heroDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
}) {
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
            className={_utils.cx(_styles, "hero-content")}
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
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-color-white",
                      "text-align-center"
                    )}
                    tag="h1"
                  >
                    {heroHeader}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "text-size-medium",
                    "text-color-white",
                    "text-align-center"
                  )}
                >
                  {heroDescription}
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-top", "margin-medium")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "search-box-wrapper")}
                    tag="div"
                  >
                    {searchBox}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "hero-section-video-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "video-overlay-layer")}
          tag="div"
        />
        <_Builtin.BackgroundVideoWrapper
          className={_utils.cx(_styles, "hero-bg-video")}
          tag="div"
          data-beta-bgvideo-upgrade={false}
          sources={[
            "https://uploads-ssl.webflow.com/65a93b454d212a1b404c3fc8/65aac3454bf5911a4923e6e4_bg-video-transcode.webm",
            "https://uploads-ssl.webflow.com/65a93b454d212a1b404c3fc8/65aac3454bf5911a4923e6e4_bg-video-transcode.mp4",
          ]}
          posterImage="https://uploads-ssl.webflow.com/65a93b454d212a1b404c3fc8/65aac3454bf5911a4923e6e4_bg-video-poster-00001.jpg"
          autoPlay={true}
          loop={true}
        />
      </_Builtin.Block>
    </_Component>
  );
}
