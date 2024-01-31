"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AutoCompleteItem } from "../../../types";

import styles from "./AutoCompleteSearch.module.scss";

export default function AutocompleteSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [autocompleteItems, setAutocompleteItems] = useState<
    AutoCompleteItem[]
  >([]);

  const Router = useRouter();

  const getAutocompleteItems = async (location: string) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location},`
      );
      const data = await response.json();
      setAutocompleteItems(data);
    } catch (error) {
      console.error("Failed to fetch autocomplete items:", error);
    }
  };

  const handleOnSearch = (string: string) => {
    setSearchTerm(string);
    getAutocompleteItems(string);
  };

  const handleOnSelect = (item: AutoCompleteItem) => {
    Router.push(`/${item.name}`);
  };

  const formatResult = (item: AutoCompleteItem) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.country}
        </span>
      </>
    );
  };

  const onKeyDown = (e: any) => {
    if (e.key === "/") {
      e.preventDefault();
      const searchBox = document.getElementById("searchBox");
      searchBox?.focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className={styles.relativeWrapper}>
      <div className={styles.fullWidth}>
        <input
          className={styles.search}
          type="text"
          id={"searchBox"}
          placeholder={`Press "/" to search`}
          autoComplete={"off"}
          onChange={(e) => handleOnSearch(e.target.value)}
        />
        {autocompleteItems.length > 0 && (
          <div className={styles.autocompleteDropdown}>
            {autocompleteItems.map((item) => (
              <div key={item.name} className={styles.autocompleteItemWrapper}>
                <li
                  onClick={() => handleOnSelect(item)}
                  className={styles.autocompleteItem}
                >
                  {formatResult(item)}
                </li>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
