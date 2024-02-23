"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      className="flex items-center fixed sm:top-10 sm:left-10 top-20 left-5"
      onClick={toggleLanguage}
      style={{ cursor: "pointer" }}
    >
      <div
        className="border bg-gray-300 dark:bg-gray-700 border-gray-600
        bg-opacity-50 rounded-full dark:border-gray-300 dark:bg-opacity-50
       px-2 py-2 mr-1 text-gray-700 dark:text-gray-300"
      >
        <span
          className={`px-2 py-1 ${
            language === "EN"
              ? "bg-gray-700 dark:bg-gray-300 dark:text-gray-700 text-gray-300"
              : ""
          } rounded-full select-none transition-colors duration-300`}
        >
          EN
        </span>
        <span
          className={`px-2 py-1 ${
            language === "BR"
              ? "bg-gray-700 dark:bg-gray-300 dark:text-gray-700 text-gray-300"
              : ""
          } rounded-full select-none transition-colors duration-300`}
        >
          BR
        </span>
      </div>
    </div>
  );
};
