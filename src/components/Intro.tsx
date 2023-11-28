'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <motion.div  initial={{ opacity: 0, scale: 0}} animate={{  opacity: 1, scale: 1 }}>
            <Image src='https://avatars.githubusercontent.com/u/137819007?v=4'
            alt='Victor Profile Image'
            width={192}
            height={192}
            quality={95}
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
            
            </motion.div>
        </div>
            <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}>
              Hello, my name is <span className='font-bold'>Victor</span>. I'm an aspiring {" "}
              <span className='font-bold'>web developer</span> and started my coding journey in <span className='underline'>August/2023</span>.
              I'm a <span className='font-bold'>Next.js</span> enjoyer, I love their server-side components while building small apps. But I can also work with full back-end code using <span className='font-bold'>Express</span>.
            </motion.p>

    </section>
  )
}
