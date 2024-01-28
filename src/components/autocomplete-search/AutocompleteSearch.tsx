"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AutoCompleteItem } from "../../../types";

export default function AutocompleteSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [autocompleteItems, setAutocompleteItems] = useState<
    AutoCompleteItem[]
  >([]);

  const Router = useRouter();

  const getAutocompleteItems = async (location: string) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}`
      );
      const data = await response.json();
      setAutocompleteItems(data);
      console.log(data);
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
    <div
      style={{
        width: "100%",
        position: "relative",
        zIndex: 300,
      }}
    >
      <div style={{ width: "100%" }}>
        <input
          type="text"
          id={"searchBox"}
          autoComplete={"off"}
          placeholder={`Press "/" to search`}
          style={{
            width: "100%",
            padding: "10px 15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            fontSize: "16px",
            color: "black",
          }}
          onChange={(e) => handleOnSearch(e.target.value)}
        />
        {autocompleteItems.length > 0 && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              maxHeight: "300px",
              overflowY: "auto",
              backgroundColor: "white",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "4px",
              marginTop: "2px",
            }}
          >
            {autocompleteItems.map((item) => (
              <div key={item.name} style={{ borderBottom: "1px solid #eee" }}>
                <li
                  onClick={() => handleOnSelect(item)}
                  style={{
                    padding: "10px 15px",
                    cursor: "pointer",
                    backgroundColor: "white",
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
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
