import * as React from "react";
import * as Types from "./types";

declare function HomeHero(props: {
  as?: React.ElementType;
  searchSlot?: Types.Devlink.Slot;
  heroText?: React.ReactNode;
  heroDescription?: React.ReactNode;
}): React.JSX.Element;
