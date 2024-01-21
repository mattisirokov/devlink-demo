import { HeroSection } from "../../devlink";
import { Navigation } from "../../devlink";

import Button from "@/components/Button";
import Search from "@/components/Search";

export default function Home() {
  return (
    <>
      <Navigation navButton={<Button text={"Search"} type={"button"} />} />
      <HeroSection
        heroHeader={"Legit the only place you should check the weather."}
        heroDescription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        }
        searchBox={<Search />}
      />
    </>
  );
}
