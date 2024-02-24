import pokedexImg from "../public/projectImgs/pokedexImg.jpg";
import drummachineImg from "../public/projectImgs/drummachineImg.jpg";
import tictactoeImg from "../public/projectImgs/tictactoeImg.jpg";
import cakeshufflerImg from "../public/projectImgs/cakeshufflerImg.jpg";
import pomodoroImg from "../public/projectImgs/pomodoroImg.jpg";
import cBackend from "../public/certificationImgs/cBackend.jpg";
import cFrontend from "../public/certificationImgs/cFrontend.jpg";
import cJavascriptAlgorithms from "../public/certificationImgs/cJavascriptAlgorithms.jpg";
import cRelationalDatabase from "../public/certificationImgs/cRelationalDatabase.jpg";
import cResponsiveWebdesign from "../public/certificationImgs/cResponsiveWebdesign.jpg";
import cJSAlgBeta from "../public/certificationImgs/cJSAlgBeta.jpg";
import cFrontEndAlura from "../public/certificationImgs/cFrontEndAlura.jpg";

export const brLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Certificação",
    hash: "#certification",
  },
] as const;

export const brProjectsData = [
  {
    title: "Pokédex",
    description:
      "Pokédex desenvolvida com Next.js, os dados obtidos são da PokeAPI, este projeto conta com uma barra de busca que pega detalhes do pokémon buscado e também conta com páginas contendo cards giratórios de cada pokémon por geração.",
    tags: ["Pokedex", "React", "Next.js", "PokeAPI", "Typescript"],
    imageUrl: pokedexImg,
    githubLink: "https://github.com/vicovaporub/pokedex-app",
  },
  {
    title: "Jogo da Velha",
    description:
      "Jogo da velha funcionando localmente, há planos para adicionar a funcionalidade multi-jogador online no futuro utilizando WebSockets.",
    tags: ["TicTacToe", "React", "TypeScript", "Next.js", "OAuth"],
    imageUrl: tictactoeImg,
    githubLink: "https://github.com/vicovaporub/tictactoe-app",
  },
  {
    title: "Bolo Aleatório",
    description: `Simples projeto de "bolo aleatório" feito para uma amiga, contém um formulário que salva um "novo bolo" em uma base de dados no MongoDB e um botão que vai buscar um bolo aleatório desta base de dados e mostrar na tela.`,
    tags: ["React", "Next.js", "Express", "MongoDB"],
    imageUrl: cakeshufflerImg,
    githubLink: "https://github.com/vicovaporub/cake-shuffler-frontend",
  },
  {
    title: "Relógio Pomodoro",
    description:
      "Projeto necessário para a certificação frontend do freeCodeCamp. Um relógio pomodoro que, por padrão, começa uma contagem regressiva de 25 minutos até 0 e então uma nova contagem de 5 à 0 e volta a repetir.",
    tags: ["Pomodoro Timer", "React"],
    imageUrl: pomodoroImg,
    githubLink: "https://github.com/vicovaporub/fcc-pomodoro",
  },
  {
    title: "Bateria Eletrônica",
    description:
      "Projeto necessário para a certificação frontend do freeCodeCamp. Um simples display com alguns botões que, quando clicados ou quando pressionada a tecla específica, tocam um som.",
    tags: ["Drum Machine", "React"],
    imageUrl: drummachineImg,
    githubLink: "https://github.com/vicovaporub/fcc-drum-machine",
  },
] as const;

export const brCertificationData = [
  {
    title: "Responsive Web Design",
    institution: "freeCodeCamp",
    description:
      "Neste curso de Certificação em Design Responsivo para Web, você aprenderá as linguagens que os desenvolvedores usam para construir páginas web: HTML (Hypertext Markup Language) para conteúdo e CSS (Cascading Style Sheets) para design.",
    date: "2023",
    imageUrl: cResponsiveWebdesign,
    certificationUrl:
      "https://freecodecamp.org/certification/victorwho/responsive-web-design",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    institution: "freeCodeCamp",
    description:
      "Enquanto HTML e CSS controlam o conteúdo e o estilo de uma página, o JavaScript é usado para torná-la interativa. Na Certificação em Algoritmos e Estrutura de Dados em JavaScript, você aprenderá os fundamentos do JavaScript, incluindo variáveis, arrays, objetos, loops e funções.",
    date: "2023",
    imageUrl: cJavascriptAlgorithms,
    certificationUrl:
      "https://freecodecamp.org/certification/victorwho/javascript-algorithms-and-data-structures",
  },
  {
    title: "Front End Development Libraries",
    institution: "freeCodeCamp",
    description:
      "Na Certificação em Bibliotecas de Desenvolvimento Front-End, você aprenderá a estilizar seu site rapidamente com o Bootstrap. Você também aprenderá a adicionar lógica aos seus estilos CSS e a estendê-los com Sass. Além disso, aprenderá a trabalhar com React e Redux.",
    date: "2023",
    imageUrl: cFrontend,
    certificationUrl:
      "http://freecodecamp.org/certification/victorwho/front-end-development-libraries",
  },
  {
    title: "Back End Development and APIs",
    institution: "freeCodeCamp",
    description:
      "Na Certificação em Desenvolvimento de Back-End e APIs, você aprenderá a escrever aplicativos de back-end com Node.js e npm. Você também construirá aplicações web com o framework Express e criará um microserviço de busca de pessoas com MongoDB e a biblioteca Mongoose.",
    date: "2023",
    imageUrl: cBackend,
    certificationUrl:
      "http://freecodecamp.org/certification/victorwho/back-end-development-and-apis",
  },
  {
    title: "Relational Database",
    institution: "freeCodeCamp",
    description:
      "Para estes cursos, você utilizará ferramentas e softwares reais de desenvolvimento, incluindo o VS Code, PostgreSQL e a linha de comando do Linux/Unix, para completar tutoriais interativos e construir projetos.",
    date: "2023",
    imageUrl: cRelationalDatabase,
    certificationUrl:
      "https://freecodecamp.org/certification/victorwho/relational-database-v8",
  },
  {
    title: "Imersão Front-End",
    institution: "Alura",
    description:
      "Curso de front-end onde os alunos aprendem a criar um clone do Spotify usando React.",
    date: "2024",
    imageUrl: cFrontEndAlura,
    certificationUrl:
      "https://cursos.alura.com.br/immersion/certificate/94ce5dd3-b090-48a0-9dc8-615d19b26965",
  },
  {
    title: "JavaScript Algorithms and Data Structures (Beta)",
    institution: "freeCodeCamp",
    description:
      "Este curso tem uma estrutura semelhante ao primeiro curso de JS, e você também aprenderá sobre Programação Orientada a Objetos (OOP), Programação Funcional, pensamento algorítmico, como trabalhar com armazenamento local e como buscar dados usando uma API.",
    date: "2024",
    imageUrl: cJSAlgBeta,
    certificationUrl:
      "https://www.freecodecamp.org/certification/victorwho/javascript-algorithms-and-data-structures-v8",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express.js",
  "PostgreSQL",
] as const;
