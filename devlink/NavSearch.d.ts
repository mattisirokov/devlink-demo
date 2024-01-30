import * as React from "react";
import * as Types from "./types";

declare function NavSearch(props: {
  as?: React.ElementType;
  searchBoxSlot?: Types.Devlink.Slot;
  commandPaletteSlot?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
