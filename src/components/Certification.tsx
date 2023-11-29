'use client'
import { motion } from "framer-motion"


export const Certification = () => {
    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 "
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        id='certification'
        >
            <h2 className="text-3xl font-medium capitalize mb-8">Certification</h2>


        </motion.section>
    )
}