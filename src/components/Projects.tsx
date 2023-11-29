"use client";
import { motion } from "framer-motion";
import { projectsData } from "../../lib/data";
import Image from "next/image";

export const Projects = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id='projects'
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">Projects</h2>
      <div>
        {projectsData.map((projects, index) => (
          <div
            className="group bg-gray-100 max-w-[50rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition"
            key={index}
          >
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold">{projects.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700">
                {projects.description}
              </p>
              <ul className="flex flex-wrap mt-4 mb-2 gap-2 sm:mt-auto">
                {projects.tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.5] px-2 py-[0.5] text-[0.5rem] uppercase tracking-wider text-white rounded-full "
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
              className="absolute top-8 -right-40 sm:w-[28.25rem] rounded-t-lg shadow-2xl w-[20rem]
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
        ))}
      </div>
    </motion.section>
  );
};
