import Card from "@/components/Grid/Card";
import { TimelineItem } from "@/components/Grid/TimelineItem";
import { Element } from "react-scroll";

import web from "@/assets/web.png";
import web3 from "@/assets/web3.png";
import safe from "@/assets/safe.png";

export default function About() {
  return (
    <Element
      name="about"
      className="min-h-screen bg-[#0b1220] flex flex-col md:flex-row"
    >
      <div className="left_about w-full md:[50%] h-screen flex  justify-center items-center">
        <div className="px-10 py-10">
          <TimelineItem
            title="Personal Info"
            time="Now"
            subtitle="Name / Age / Languages"
          >
            22, male. CN/EN. Remote developer.
          </TimelineItem>

          <TimelineItem
            title="Education"
            time="2021 - 2025"
            subtitle="Bachelor’s Degree"
          >
            Bachelor’s degree. Self-driven, project-focused.
          </TimelineItem>

          <TimelineItem
            title="Frontend"
            time="2023 - Now"
            subtitle="React / Next.js"
          >
            Components, state, animations, performance.
          </TimelineItem>

          <TimelineItem title="Web3" time="2024 - Now" subtitle="EVM / DeFi">
            Wallets, contract calls, tx signing, data UI.
          </TimelineItem>

          <TimelineItem
            title="Security"
            time="2026 - Next"
            subtitle="Solidity / Testing"
            isLast
          >
            Tests, audits mindset, common vuln prevention.
          </TimelineItem>
        </div>
      </div>
      <div
        className="right_about w-full md:w-[50%] h-screen flex flex-col
      gap-20 justify-center items-center"
      >
        <Card title="Frontend" image={web} />
        <Card title="Web3" image={web3} />
        <Card title="Security" image={safe} />
      </div>
    </Element>
  );
}
