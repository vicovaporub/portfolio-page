import { About } from "@/components/About";
import { Certification } from "@/components/Certification";
import Intro from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Separation } from "@/components/Separation";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Intro/>
    <Separation/>
    <About />
    <Projects />
    <Skills />
    <Certification />
   </main>
  )
}
