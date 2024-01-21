"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "./Button";

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
        className={"text-black p-2 mr-2 rounded-md outline-none"}
        title={"Search"}
        onChange={(e) => setTerm(e.target.value)}
      />

      <Button
        text={"Search"}
        type={"button"}
        onClick={() => handleSearch(term)}
      />
    </>
  );
}
