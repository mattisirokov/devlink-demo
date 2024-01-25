"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from "./DashboardSearch.module.css";

export default function DashboardSearch() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    router.push(`/${search}`);
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
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        id={"searchBox"}
        type="text"
        placeholder={"Press / to search"}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className={styles.submitButton}
        title={"search"}
        type={"submit"}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
