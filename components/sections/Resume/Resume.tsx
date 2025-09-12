"use client";
import Title from "@/components/common/Title";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Education from "./Education";
import Skills from "./Skills";
import About from "./About";

export default function Resume() {
  const [active, setActive] = useState("Education");
  const profileTabs: string[] = ["Education", "Skills", "About"];
  return (
    <section id="resume" className="py-10">
      <Title title="Resume" />
      <ul className="w-full max-w-3xl mx-auto grid grid-cols-3 gap-4 my-2">
        {profileTabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActive(tab)}
            className={`text-center py-2 px-1 md:px-4 rounded-xl cursor-default font-medium transition-all duration-200
        ${
          active === tab
            ? "bg-[var(--main)] scale-105"
            : "bg-primary-foreground"
        }`}
          >
            {tab}
          </li>
        ))}
      </ul>

      <ScrollArea className="w-full max-w-3xl mx-auto h-96 my-5 bg-primary-foreground whitespace-nowrap rounded-md p-2">
        {active === "Education" && <Education />}
        {active === "Skills" && <Skills />}
        {active === "About" && <About />}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
