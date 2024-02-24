"use client";
import { motion } from "framer-motion";
import { skillsData } from "../../lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

export const Skills = () => {
  const { language } = useLanguage();

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="skills"
    >
      {language === "EN" ? (
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          Skills
        </h2>
      ) : (
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          Habilidades
        </h2>
      )}
      <ul className="flex flex-wrap justify-center text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            className="bg-white dark:bg-gray-800
             border border-black-[0.1] rounded-xl px-5 py-3 dark:text-gray-300
              hover:bg-gray-100 dark:hover:bg-gray-600 m-[0.2rem] hover:default"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};
