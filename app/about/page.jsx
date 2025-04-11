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
    <motion.main className="space-y-6 px-6 py-12" initial="hidden" animate="visible" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      {/* 🌟 About Me Section */}
      <motion.section className="space-y-4" >
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          About Me
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
  Building <span className="relative group">
    <span className="underline cursor-pointer">robust</span>
    <span className="absolute left-0 bottom-full mb-2 w-48 p-2 text-sm text-white bg-zinc-800 rounded opacity-0 group-hover:opacity-100 transition">
      Strong, reliable, and able to handle different conditions effectively.
    </span>
  </span> systems with a focus on problem-solving, efficiency, and seamless functionality.
</p>

      </motion.section>
      <motion.section className="space-y-4">
        <h2 className="text-md font-bold text-zinc-800 dark:text-zinc-200">
          Now
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
        I build open-source tools because why do things manually when a script can suffer instead? <br/> <br/> Also, I ramble about code on my blog , check it out !       </p>

      </motion.section>
      <section className="max-w-lg text-zinc-600 dark:text-zinc-400">
      <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">Software Philosophy</h2>
      <p className="mt-4">
        Building your own way of thinking is a bit like debugging life itself—staring at the chaos,
        questioning the rules, rewriting what doesn’t sit right.  <br/> Different people have different ways to find it.
        I’m just here still refactoring thoughts.
      </p>
      <p className="mt-4">
        But for now, two immutable laws stand: <br/>
        <br />   1. Any Tool must obey code minimalism — fewer lines, cleaner minds. <br/> <br/>
        2. Data = user’s. No exceptions. <q>Long live DApps.</q> <cite>— Me</cite>
        </p>
    </section>
<motion.section>

  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
    Check out my <a
    href="https://github.com/0xquirkai"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block font-medium text-dark-600 hover:underline dark:text-dark-400"
  >
<FaGithub/>  </a>  I keep it updated with projects, experiments, and things I break on purpose ,
    You might find something useful or at least interesting.
  </p>

</motion.section>

    </motion.main>
  );
}
