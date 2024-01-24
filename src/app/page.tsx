import { Button } from "../../devlink";
import Search from "@/components/Search";

import { HomeHero } from "../../devlink";

export default function Home() {
  return <HomeHero searchSlot={<Search />} />;
}
