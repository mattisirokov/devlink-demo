"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ExampleSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("location", term);
    } else {
      params.delete("location");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <input
      placeholder="test"
      onChange={(event) => handleSearch(event.target.value)}
      defaultValue={searchParams.get("location"?.toString()) || ""}
    />
  );
}
