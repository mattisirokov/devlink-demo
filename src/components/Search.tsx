"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ExampleSearch() {
  const [term, setTerm] = useState<string>("");

  const router = useRouter();

  const handleSearch = (term: string) => {
    setTerm(term);
    router.push(`/${term}`);
  };

  return (
    <>
      <input
        title={"Search"}
        className={"text-black"}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        title={"search"}
        type={"submit"}
        onClick={() => handleSearch(term)}
      >
        Search
      </button>
    </>
  );
}
