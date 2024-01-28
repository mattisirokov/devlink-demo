import { HomeHero } from "../../devlink";
import AutocompleteSearch from "@/components/autocomplete-search/AutocompleteSearch";

export default function Home() {
  return <HomeHero searchSlot={<AutocompleteSearch />} />;
}
