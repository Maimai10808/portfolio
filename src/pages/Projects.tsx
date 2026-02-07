import { Element } from "react-scroll";
import Card from "@/components/Grid/Card";
import InfiniteHorizontalSlider from "@/components/Devui/InfiniteHorizontalSlider";

export default function Projects() {
  return (
    <Element
      name="projects"
      className="min-h-screen flex flex-col justify-center items-center gap-30"
    >
      <h1
        className=" text-4xl  md:text-6xl text-center
      bg-linear-to-br from-rose-600 via-fuchsia-500 to-pink-200
      bg-clip-text text-transparent drop-shadow-sm"
      >
        2+ Years Experienced In Projects
      </h1>

      <InfiniteHorizontalSlider
        className="w-[80%]  md:w-[90%] "
        trackClassName=" px-6 py-6 "
      >
        <Card title="1" image="" />
        <Card title="2" image="" />
        <Card title="3" image="" />
        <Card title="4" image="" />
        <Card title="5" image="" />
        <Card title="6" image="" />
      </InfiniteHorizontalSlider>
    </Element>
  );
}
