import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pokedexImg from '../public/pokedexImg.jpg'
import drummachineImg from '../public/drummachineImg.jpg'
import tictactoeImg from '../public/tictactoeImg.jpg'
import cakeshufflerImg from '../public/cakeshufflerImg.jpg'
import pomodoroImg from '../public/pomodoroImg.jpg'

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Pokedex",
    description:
      "Pokedex build with Next.js, data fetched from PokeAPI, searchbar to get details from a single pokemon or pages with small cards for each pokemon of a generation of games.",
    tags: ["Pokedex", "React", "Next.js", "PokeAPI", "Typescript" ],
    imageUrl: pokedexImg
  },
  {
    title: "Tic Tac Toe",
    description:
      "Functioning local tic tac toe game. Uses authentication to play because in the future it will be online multiplayer.",
    tags: ["TicTacToe", "React", "TypeScript", "Next.js", "OAuth"],
    imageUrl: tictactoeImg
  },
  {
    title: "Cake Shuffler",
    description:
      "Simple app to help a friend deciding which cake she will bake. It has a form that recieves batter, filling and topping flavors of a cake, saves as a new cake in a MongoDB database and has a button that displays a random cake from the database to bake.",
    tags: ["React", "Next.js", "Express", "MongoDB"],
    imageUrl: cakeshufflerImg
  },
  {
    title: "Pomodoro Timer",
    description:
      "FreeCodeCamp's project for frontend certification. Pomodoro Timer that starts counting down from 25 minutes down to 0, then starts a new countdown for 5 minutes and then repeats.",
    tags: ["Pomodoro Timer", "React"],
    imageUrl: pomodoroImg
  },
  {
    title: "Drum Machine",
    description:
      "FreeCodeCamp's project for frontend certification. Simple Drum Machine that plays different sounds when a button is clicked or a key is pressed.",
    tags: ["Drum Machine", "React"],
    imageUrl: drummachineImg
  },
] as const;


export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
  "Express",
  "PostgreSQL",
] as const;