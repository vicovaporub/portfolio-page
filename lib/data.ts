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
import timezoneImg from "../public/projectImgs/timezoneImg.jpg";
import portifolioPageImg from "../public/projectImgs/portifolioPageImg.jpg";
import currencyExchangeImg from "../public/projectImgs/currencyExchangeImg.jpg";
import docesPageImg from "../public/projectImgs/docesPageImg.png";
import cScientificComputing from "../public/certificationImgs/cScientificComputingWithPython.jpg"
import cDataAnalysis from '../public/certificationImgs/cDataAnalysisWithPython.jpg'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certification",
    hash: "#certification",
  },
] as const;

export const projectsData = [
  {
    title: "Bakery Shop",
    description:
      "Online shop for a friend's business. It's a online bakery shop that stores data from users and orders in a MongoDB database and displays when the users order is accepted.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Redux Toolkit",
    ],
    imageUrl: docesPageImg,
    githubLink: "https://github.com/vicovaporub/doces-page",
  },
  {
    title: "Pokedex",
    description:
      "Pokedex build with Next.js, data fetched from PokeAPI, searchbar to get details from a single pokemon or pages with small cards for each pokemon of a generation of games.",
    tags: ["Pokedex", "React", "Next.js", "PokeAPI", "Typescript"],
    imageUrl: pokedexImg,
    githubLink: "https://github.com/vicovaporub/pokedex-app",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Functioning local tic tac toe game. Uses authentication to play because in the future it will be online multiplayer.",
    tags: ["TicTacToe", "React", "TypeScript", "Next.js", "OAuth"],
    imageUrl: tictactoeImg,
    githubLink: "https://github.com/vicovaporub/tictactoe-app",
  },
  {
    title: "BRL Currency Exchange",
    description:
      "Simple currency exchange app that fetches data from a exchange rate API and lets the user convert BRL to other currencies.",
    tags: [
      "Currency Exchange",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
    ],
    imageUrl: currencyExchangeImg,
    githubLink: "https://github.com/vicovaporub/brl-currency-exchange-app",
  },
  {
    title: "Timezone Checker",
    description:
      "Simple page that displays that fetches data from a timezone API and displays the time in São Paulo (fixed) and in other places (Los Angeles as default).",
    tags: ["React", "Timezone API", "TypeScript", "Tailwind CSS"],
    imageUrl: timezoneImg,
    githubLink: "https://github.com/vicovaporub/timezone-app",
  },
  {
    title: "Cake Shuffler",
    description:
      "Simple app to help a friend deciding which cake she will bake. It has a form that recieves batter, filling and topping flavors of a cake, saves as a new cake in a MongoDB database and has a button that displays a random cake from the database to bake.",
    tags: ["React", "Next.js", "Express", "MongoDB", "TypeScript"],
    imageUrl: cakeshufflerImg,
    githubLink: "https://github.com/vicovaporub/cake-shuffler-frontend",
  },
  {
    title: "Portfolio Page",
    description:
      "This page that you are seeing right now. It was built with Next.js and Tailwind CSS. It has a dark and light mode, it has a language switcher (en-US -> pt-BR) and it is responsive.",
    tags: ["Portfolio", "Next.js", "Tailwind CSS", "React"],
    imageUrl: portifolioPageImg,
    githubLink: `https://github.com/vicovaporub/portfolio-page`,
  },
  {
    title: "Pomodoro Timer",
    description:
      "FreeCodeCamp's project for frontend certification. Pomodoro Timer that starts counting down from 25 minutes down to 0, then starts a new countdown for 5 minutes and then repeats.",
    tags: ["Pomodoro Timer", "React"],
    imageUrl: pomodoroImg,
    githubLink: "https://github.com/vicovaporub/fcc-pomodoro",
  },
  {
    title: "Drum Machine",
    description:
      "FreeCodeCamp's project for frontend certification. Simple Drum Machine that plays different sounds when a button is clicked or a key is pressed.",
    tags: ["Drum Machine", "React"],
    imageUrl: drummachineImg,
    githubLink: "https://github.com/vicovaporub/fcc-drum-machine",
  },
] as const;

export const certificationData = [
  {
    title: "Responsive Web Design",
    institution: "freeCodeCamp",
    description:
      "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.",
    date: "2023",
    imageUrl: cResponsiveWebdesign,
    certificationUrl:
      "https://freecodecamp.org/certification/victorwho/responsive-web-design",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    institution: "freeCodeCamp",
    description:
      "While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you'll learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.",
    date: "2023",
    imageUrl: cJavascriptAlgorithms,
    certificationUrl:
      "https://freecodecamp.org/certification/victorwho/javascript-algorithms-and-data-structures",
  },
  {
    title: "Front End Development Libraries",
    institution: "freeCodeCamp",
    description:
      "In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass. And learn how to work with React and Redux",
    date: "2023",
    imageUrl: cFrontend,
    certificationUrl:
      "http://freecodecamp.org/certification/victorwho/front-end-development-libraries",
  },
  {
    title: "Back End Development and APIs",
    institution: "freeCodeCamp",
    description:
      "In the Back End Development and APIs Certification, you'll learn how to write back end apps with Node.js and npm. You'll also build web applications with the Express framework, and build a People Finder microservice with MongoDB and the Mongoose library.",
    date: "2023",
    imageUrl: cBackend,
    certificationUrl:
      "http://freecodecamp.org/certification/victorwho/back-end-development-and-apis",
  },
  {
    title: "Relational Database",
    institution: "freeCodeCamp",
    description:
      "For these courses, you will use real developer tools and software including VS Code, PostgreSQL, and the Linux / Unix command line to complete interactive tutorials and build projects.",
    date: "2023",
    imageUrl: cRelationalDatabase,
    certificationUrl:
      "https://freecodecamp.org/certification/victorwho/relational-database-v8",
  },
  {
    title: "Imersão Front-End",
    institution: "Alura",
    description:
      "Front-end course where students learn how to create a Spotify clone using React",
    date: "2024",
    imageUrl: cFrontEndAlura,
    certificationUrl:
      "https://cursos.alura.com.br/immersion/certificate/94ce5dd3-b090-48a0-9dc8-615d19b26965",
  },
  {
    title: "JavaScript Algorithms and Data Structures (Beta)",
    institution: "freeCodeCamp",
    description:
      "This course has similar structure from the first JS course, and you'll also learn about Object Oriented Programming (OOP), Functional Programming, algorithmic thinking, how to work with local storage, and how to fetch data using an API.",
    date: "2024",
    imageUrl: cJSAlgBeta,
    certificationUrl:
      "https://www.freecodecamp.org/certification/victorwho/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "Scientific Computing with Python",
    institution: "freeCodeCamp",
    description:
      "The Scientific Computing with Python (Beta) curriculum will equip you with the skills to analyze and manipulate data using Python, a powerful and versatile programming language. You'll learn key concepts like data structures, algorithm, Object Oriented Programming, and how to perform complex calculations using a variety of tools.",
    date: "2024",
    imageUrl: cScientificComputing,
    certificationUrl:
      "https://www.freecodecamp.org/certification/victorwho/scientific-computing-with-python-v7",

  },
  {
    title: "Data Analysis with Python",
    institution: "freeCodeCamp",
    description:
      "In the Data Analysis with Python Certification, you'll learn the fundamentals of data analysis with Python. By the end of this certification, you'll know how to read data from sources like CSVs and SQL, and how to use libraries like Numpy, Pandas, Matplotlib, and Seaborn to process and visualize data.",
    date: "2024",
    imageUrl: cDataAnalysis,
    certificationUrl:
      "https://www.freecodecamp.org/certification/victorwho/data-analysis-with-python-v7",

  }
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
  "Redux",
  "Python",
  'Pandas',
  `Matplotlib`,
  'NumPy',
] as const;
