"use client";
import { motion } from "framer-motion";
import { certificationData } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export const Certification = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="certification"
    >
      <h2 className="text-3xl font-medium capitalize mb-8">Certification</h2>
      <div className="flex flex-wrap">
        {[...certificationData].reverse().map((certification, index) => (
          <Link
            href={certification.certificationUrl}
            target="_blank"
            className="group bg-gray-100 w-[50rem] dark:bg-gray-800
                     border border-black/5 overflow-hidden sm:pr-8 sm:h-fit
                     mb-3 sm:mb-8 last:mb-0 p-8 hover:bg-gray-200 dark:hover:bg-gray-600 transition group"
            key={index}
          >
            <div>
              <h3 className="text-2xl font-semibold">{certification.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
                {certification.description}
              </p>
            </div>

            <Image
              className="sm:ml-[9rem] h-[15rem] w-[25rem] mt-3 rounded-full group-hover:scale-110"
              src={certification.imageUrl}
              alt="Certification"
            />
          </Link>
        ))}
      </div>
    </motion.section>
  );
};
