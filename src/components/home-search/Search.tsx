"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    router.push(`/${searchTerm}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        style={{ color: "black" }}
      />
      <button
        style={{
          backgroundColor: "black",
        }}
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
}
