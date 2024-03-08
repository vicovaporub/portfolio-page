"use client";
import { motion } from "framer-motion";
import { projectsData } from "../../lib/data";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { brProjectsData } from "../../lib/brData";

export const Projects = () => {
  const { language } = useLanguage();
  const data = language === "EN" ? projectsData : brProjectsData;
  return (
    <motion.section
      className="mb-28 max-w-[45rem]
       text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="projects"
    >
      {language === "EN" ? (
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          Projects
        </h2>
      ) : (
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          Projetos
        </h2>
      )}
      <div>
        {data.map((projects, index) => (
          <a
            href={projects.githubLink}
            target="_blank"
            key={index}
            className="sm:flex sm:flex-wrap sm:mt-4 sm:mb-2 sm:gap-2"
          >
            <div
              className="group bg-gray-100
              rounded-xl dark:bg-gray-700
               sm:w-[50rem] border border-black/5 overflow-hidden
              sm:pr-8 sm:relative sm:max-h-[23rem] mb-3 
              sm:mb-2 sm:even:pl-8 hover:bg-gray-200
               dark:hover:bg-gray-600 transition"
            >
              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{projects.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
                  {projects.description}
                </p>
                <ul className="flex flex-wrap items-center justify-center mt-4 mb-2 gap-2 sm:mt-auto">
                  {projects.tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.5] dark:bg-gray-800 mt-2 px-2 py-[0.5] text-[0.5rem] uppercase tracking-wider text-white rounded-full "
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <Image
                src={projects.imageUrl}
                alt="Project I worked on"
                className="sm:absolute
                border-gray-300 dark:border-gray-700 border top-8 -right-40 sm:w-[28.25rem]
                 rounded-t-lg shadow-2xl w-[20rem] ml-[2rem]
              transition
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
              group-hover:scale-105
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
              group-even:right-[initial] group-even:-left-40"
              />
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
};
