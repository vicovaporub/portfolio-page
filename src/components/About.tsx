"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const EnAbout = () => {
  return (
    <>
      <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
      <p className="mb-3 mt-4 px-4 !leading-[1.5]">
        I have a bachelor degree in{" "}
        <span className="font-bold">Defense and Strategic Management</span> and
        a Master degree in{" "}
        <span className="font-bold">Communication and Semiotics</span>, but
        programming was always a part of my life. Mid-2023 I decided to give a
        chance to <span className="italic">coding</span> and fell in love with
        all the possibilities I can do with it. I started with web development
        courses, <span className="underline">HTML</span> and{" "}
        <span className="underline">CSS</span>, then I followed up with{" "}
        <span className="underline">JavaScript</span> to give{" "}
        <span className="italic">function</span> to it. Then I ate up{" "}
        <span className="underline">React</span> and{" "}
        <span className="underline">Next.js</span> and learned how libraries and
        frameworks can help almost everything. I studied back-end development
        too, <span className="underline">PostgreSQL</span>,{" "}
        <span className="underline">MongoDB</span> and databases in general,{" "}
        <span className="underline">Express.js</span> and how to run servers so
        my apps can run smoothly.
      </p>
      <p className="mb-3 mt-4 px-4 !leading-[1.5]">
        After studying a lot, I feel I am prepared to face the challenge and get
        a full-time position as a web developer. My main coding knowledge is{" "}
        <span className="font-bold">Next.js(React)</span>,{" "}
        <span className="font-bold">Node.js</span> and
        <span className="font-bold">TypeScript</span>, I can also work with{" "}
        <span className="underline">Tailwind CSS</span>.
      </p>
      <p className="mb-3 mt-4 px-4 !leading-[1.5]">
        When I'm not working I'm probably out with friends or playing
        video-games. I used to <span className="italic">stream</span> on Twitch
        for a while when I was playing, I love this social part of playing a
        game and have people watching and asking questions.
      </p>
    </>
  );
};

const PtbrAbout = () => {
  return (
    <>
      <h2 className="text-3xl font-medium capitalize mb-8">Sobre</h2>
      <p className="mb-3 mt-4 px-4 !leading-[1.5]">
        Eu sou bacharel em{" "}
        <span className="font-bold">
          Defesa e Gestão Estratégica Internacional
        </span>{" "}
        e Mestre em <span className="font-bold">Comunicação e Semiótica</span>,
        mas programação sempre esteve por perto na minha vida. Na metade de 2023
        eu resolvi dar uma chance para a essa área de{" "}
        <span className="italic">código</span> e percebi como tinham tantas
        possibilidades de "criar" coisas novas que eu nem imaginava. Comecei com
        cursos de desenvolvimento web, <span className="underline">HTML</span> e{" "}
        <span className="underline">CSS</span>, fui para o{" "}
        <span className="underline">JavaScript</span> para aprender a dar{" "}
        <span className="italic">função</span> para o que já havia aprendido. E
        logo depois, com o <span className="underline">React</span> e{" "}
        <span className="underline">Next.js</span>, aprendi como as bibliotecas
        e frameworks funcionam e ajudam a deixar tudo mais simples. também
        estudei um pouco do backend,{" "}
        <span className="underline">PostgreSQL</span>,{" "}
        <span className="underline">MongoDB</span> (e base de dados no geral),{" "}
        <span className="underline">Express.js</span> e como criar servidores
        para os apps trabalharem melhor.
      </p>
      <p className="mb-3 mt-4 px-4 !leading-[1.5]">
        Depois de estudar bastante me sinto preparado para os desafios de ser um
        desenvolvedor web em tempo integral. Meu maior conhecimento é em{" "}
        <span className="font-bold">Next.js(React)</span>,{" "}
        <span className="font-bold">Node.js</span> e{" "}
        <span className="font-bold">TypeScript</span>, e também posso trabalhar
        com <span className="underline">Tailwind CSS</span>.
      </p>
      <p className="mb-3 mt-4 px-4 !leading-[1.5]">
        Quando não estou trabalhando geralmente estou fora de casa com amigos ou
        jogando video-games. Já cheguei a fazer{" "}
        <span className="italic">transmissões</span> na Twitch por um tempo
        enquanto jogava algo porque gosto muito de trocar ideia com as pessoas a
        respeito de coisas que gosto de fazer.
      </p>
    </>
  );
};

export const About = () => {
  const { language } = useLanguage();
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="about"
    >
      {language === "EN" ? <EnAbout /> : <PtbrAbout />}
    </motion.section>
  );
};
