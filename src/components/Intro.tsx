"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";

const EnIntro = () => {
  return (
    <div>
      Hello, my name is <span className="font-bold">Victor</span>, welcome to my{" "}
      <span className="italic">Portifolio Page</span> built with{" "}
      <span className="font-bold">Next.js</span> and styled with{" "}
      <span className="font-bold">Tailwind</span>. I'm an aspiring{" "}
      <span className="font-bold">web developer</span> and started my coding
      journey in <span className="underline">August/2023</span>. I'm a{" "}
      <span className="font-bold">Next.js</span> enjoyer, I love their
      server-side components while building small apps. But I can also work with
      full back-end code using <span className="font-bold">Express.js</span>.
    </div>
  );
};

const PtbrIntro = () => {
  return (
    <div>
      Olá, meu nome é <span className="font-bold">Victor</span> e este é o meu{" "}
      <span className="italic">Portifolio</span>, ele foi produzido utilizando{" "}
      <span className="font-bold">Next.js</span> e estilizado com{" "}
      <span className="font-bold">Tailwind</span>. Sou um{" "}
      <span className="font-bold">desenvolvedor web</span> em formação e comecei
      minha jornada com código em <span className="underline">Agosto/2023</span>
      . Tenho experiência (e preferência em utilizar) o{" "}
      <span className="font-bold">Next.js</span> pela ótima funcionalidade dos
      componentes de servidor enquanto desenvolvo páginas menos complexas. Mas
      também sei trabalhar com backend puro usando{" "}
      <span className="font-bold">Express.js</span>.
    </div>
  );
};

export default function Intro() {
  const { language } = useLanguage();
  const introText = language === "EN" ? <EnIntro /> : <PtbrIntro />;
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/137819007?v=4"
            alt="Victor Profile Image"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-24 w-24 rounded-full select-none object-cover border-[0.35rem] border-white dark:border-gray-700 shadow-xl"
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {introText}
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="mailto:victor.castro34@gmail.com"
          className="bg-gray-800 border border-gray-900
           dark:bg-gray-300 dark:border dark:border-black
            text-white dark:text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110"
        >
          {language === "EN" ? <div>Contact-me</div> : <div>Contato</div>}{" "}
          <BsArrowRight />
        </Link>

        {language === "EN" ? (
          <a
            href="/CV/CV_Victor_Feb_2024_enUS.pdf"
            download={true}
            className="bg-gray-300 border border-gray-700 dark:bg-gray-700
             dark:border-gray-300
              px-7 py-3 flex items-center gap-2 rounded-full
              focus:scale-110 hover:scale-110 cursor-pointer"
          >
            CV - Download(en-US) <HiDownload />
          </a>
        ) : (
          <a
            href="/CV/CV_Victor_Fev_2024_ptBR.pdf"
            download={true}
            className="bg-gray-300 dark:bg-gray-700
            dark:border-gray-300 border border-gray-700
              px-7 py-3 flex items-center gap-2 rounded-full
               focus:scale-110 hover:scale-110 cursor-pointer"
          >
            CV - Download(pt-BR) <HiDownload />
          </a>
        )}
        <div className="flex justify-center items-center gap-1">
          <a
            href="https://www.linkedin.com/in/victor-castro-73891833/"
            target="_blank"
            className="bg-gray-300 dark:bg-gray-700
            border border-gray-700 dark:border-gray-300
             px-7 py-3 flex items-center
              gap-2 rounded-full focus:scale-110 hover:scale-110 cursor-pointer"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/vicovaporub"
            target="_blank"
            className="bg-gray-300 dark:bg-gray-700
            border border-gray-700 dark:border-gray-300
             px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 
             hover:scale-110 cursor-pointer"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
