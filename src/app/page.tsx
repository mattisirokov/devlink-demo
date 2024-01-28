import { HomeHero } from "../../devlink";
import AutocompleteSearch from "@/components/autocomplete-search/AutocompleteSearch";

export default function Home() {
  return (
    <HomeHero
      heroText={"The only place you should be checking the weather as of now!"}
      heroDescription={
        "This pronject was made to demonstrate the power of DevLink with NextJS. Enter a city and get the weather forecast for the next 14 days and so much more!"
      }
      searchSlot={<AutocompleteSearch />}
    />
  );
}
