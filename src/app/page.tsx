"use client";
import { About } from "@/components/About";
import { Certification } from "@/components/Certification";
import Intro from "@/components/Intro";
import { LanguageToggle } from "@/components/LanguageToggle";
import { LightDark } from "@/components/LightDark";
import NavBar from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Separation } from "@/components/Separation";
import { Skills } from "@/components/Skills";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="flex flex-col items-center px-4">
        <NavBar />
        <LanguageToggle />
        <LightDark />
        <Intro />
        <Separation />
        <About />
        <Projects />
        <Skills />
        <Certification />
      </main>
    </LanguageProvider>
  );
}
