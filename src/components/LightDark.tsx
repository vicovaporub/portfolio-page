"use client";
import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export const LightDark = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <button
        className="fixed sm:top-10 sm:right-10 top-20 right-5 bg-gray-300 dark:bg-gray-700
    w-[3rem] h-[3rem] bg-opacity-50 dark:bg-opacity-50 backdrop-blur-[0.5rem]
    border border-gray-600 dark:border-gray-300  shadow-2x1
    rounded-full flex items-center justify-center hover:scale-[1.15]
    active:scale-105 transition-all "
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </>
  );
};
