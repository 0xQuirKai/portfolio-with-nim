"use client";

import { motion } from "framer-motion";
import {  FaGithub } from "react-icons/fa";

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}
const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}



export default function AboutPage() {
  return (
    <motion.main className="space-y-4 px-6 py-6" initial="hidden" animate="visible" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      {/* 🌟 About Me Section */}
      <motion.section className="space-y-4" >
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          About Me
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
  Hey, I’m Khalil — just some guy who tried{" "}
  <span className="relative group inline-block">
    <span className="underline cursor-pointer" tabIndex={0} aria-describedby="tooltip-coding">
      coding
    </span>
    <span
      id="tooltip-coding"
      role="tooltip"
      className="absolute left-0 bottom-full mb-2 w-48 p-2 text-sm text-white bg-zinc-800 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition pointer-events-none"
    >
      Writing software and solving problems with code.
    </span>
  </span>{" "}
  one day and somehow got stuck with it.
</p>


      </motion.section>
      <motion.section className="space-y-4">
        <h2 className="text-md font-bold text-zinc-800 dark:text-zinc-200">
          What i do?
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
I use Next.js, Node.js, and Go to build AI-powered web applications and automation bots for high-scale and enterprise clients. My workflow includes containerization with Docker, orchestration with K8s, and CI/CD pipelines  for automated testing and deployment. </p>
      </motion.section>
      <section className="max-w-lg text-zinc-600 dark:text-zinc-400">
      <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">My Philosophy</h2>
      <p className="mt-4">
        "The foundation of all good is knowledge; and the foundation of all knowledge is sound reasoning." <br></br> Code, like thought, must be logical, purposeful, never ornamental.
      </p>
      <p className="mt-4">
       Two principles guide me : <br/>
        <br />   1. Any Software must obey code minimalism — fewer lines, cleaner minds. <br/> <br/>
        2. Data = user’s. No exceptions. <q>Long live DApps.</q> <cite>— Me</cite>
        </p>
    </section>


    </motion.main>
  );
}
