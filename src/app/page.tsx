import { Button } from "../../devlink";
import Search from "@/components/home-search/Search";

import { HomeHero } from "../../devlink";

export default function Home() {
  return <HomeHero searchSlot={<Search />} />;
}
