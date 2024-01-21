import * as React from "react";
import * as Types from "./types";

declare function HeroSection(props: {
  as?: React.ElementType;
  heroHeader?: React.ReactNode;
  searchBox?: Types.Devlink.Slot;
  heroDescription?: React.ReactNode;
}): React.JSX.Element;
