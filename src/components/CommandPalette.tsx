"use client";

import { useState, useEffect } from "react";

import "react-cmdk/dist/cmdk.css";
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from "react-cmdk";
import { AutoCompleteItem } from "../../types";

const Example = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  const [autocompleteItems, setAutocompleteItems] = useState<
    AutoCompleteItem[]
  >([]);

  useHandleOpenCommandPalette(setOpen);

  useEffect(() => {
    const getAutocompleteItems = async (location: string) => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}`
        );
        const data = await response.json();
        setAutocompleteItems(data);
      } catch (error) {
        console.error("Failed to fetch autocomplete items:", error);
      }
    };

    if (search) {
      getAutocompleteItems(search);
    }
  }, [search]);

  // const filteredItems = filterItems(
  //   autocompleteItems.map((item) => ({
  //     label: item.name,
  //     heading: item.country,
  //     onSelect: () => {
  //       setOpen(false);
  //       setSearch("");
  //       setPage("root");
  //     },
  //   })),
  //   search
  // );

  return (
    // <CommandPalette
    //   onChangeSearch={setSearch}
    //   onChangeOpen={setOpen}
    //   search={search}
    //   isOpen={open}
    //   page={page}
    //   placeholder={"Search weather..."}
    // >
    //   {/* <CommandPalette.Page id="root">
    //     {filteredItems.length ? (
    //       filteredItems.map((item) => (
    //         <CommandPalette.ListItem
    //           key={item.id}
    //           index={getItemIndex(filteredItems, item.id)}
    //           {...item}
    //         />
    //       ))
    //     ) : (
    //       <CommandPalette.FreeSearchAction />
    //     )}
    //   </CommandPalette.Page> */}
    // </CommandPalette>
    <div></div>
  );
};

export default Example;
