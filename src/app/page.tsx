import { Hero } from "../../devlink";
import AutocompleteSearch from "@/components/autocomplete-search/AutocompleteSearch";

export default function Home() {
  return (
    <Hero
      searchSlot={<AutocompleteSearch />}
    />
  );
}
