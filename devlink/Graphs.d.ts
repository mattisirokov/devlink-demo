import * as React from "react";
import * as Types from "./types";

declare function Graphs(props: {
  as?: React.ElementType;
  graphSlot?: Types.Devlink.Slot;
  header?: React.ReactNode;
}): React.JSX.Element;
