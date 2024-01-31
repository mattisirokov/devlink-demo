import * as React from "react";
import * as Types from "./types";

declare function NavHeader(props: {
  as?: React.ElementType;
  headingText?: React.ReactNode;
  headingTime?: Types.Devlink.RuntimeProps;
  localTime?: React.ReactNode;
  buttonSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
