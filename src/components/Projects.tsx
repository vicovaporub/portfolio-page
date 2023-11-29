'use client'
import { motion } from 'framer-motion'
import { projectsData } from '../../lib/data'
import { BsTags } from 'react-icons/bs'

export const Projects = () => {
    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        >
            <h2 className="text-3xl font-medium capitalize mb-8">Projects</h2>
            <div>
                {
                    projectsData.map((projects, index) => (
                        <div key={index}>
                            <h3>{projects.title}</h3>
                            <p>
                                {projects.description}
                            </p>
                            <ul>
                                {projects.tags.map((tag, index) => (
                                    <li key={index}>
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>

        </motion.section>
    )
}