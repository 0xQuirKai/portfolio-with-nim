"use client";

import { motion } from "framer-motion";

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const TRANSITION_SECTION = {
  duration: 0.4,
  ease: "easeOut",
};

export default function AboutPage() {
  return (
    <motion.main 
      className="space-y-8 px-6 py-8 max-w-2xl" 
      initial="hidden" 
      animate="visible" 
      variants={VARIANTS_CONTAINER}
    >
      {/* 🌟 About Me Section */}
      <motion.section className="space-y-3" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          About Me
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Hey, I’m Khalil Tahraoui — a Computer Systems Engineer graduated from the École Nationale Polytechnique d'Oran (ENPO-MA). I sit at the intersection of complex distributed systems, cryptography, and large-scale platform engineering, balancing research-driven design with realistic execution under constraints.
        </p>
      </motion.section>

      {/* 💻 What I Do Section */}
      <motion.section className="space-y-3" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          What I Do?
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I build secure, scalable decentralized architectures. My background includes architecting peer-to-peer (P2P){" "}
          <span className="relative group inline-block">
            <span className="underline cursor-pointer font-medium text-zinc-700 dark:text-zinc-300" tabIndex={0} aria-describedby="tooltip-fl">
              distributed federated learning
            </span>
            <span
              id="tooltip-fl"
              role="tooltip"
              className="absolute left-0 bottom-full mb-2 w-64 p-2 text-xs text-white bg-zinc-800 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition pointer-events-none z-10"
            >
              Training machine learning models collectively across decentralized nodes without sharing raw data.
            </span>
          </span>{" "}
          systems integrated with **Zero-Knowledge Proofs (ZKP)** for high-throughput trust environments. On the cloud side, my workflow relies on containerization with **Docker**, orchestration with **Kubernetes**, and spinning up heavy infrastructure via **OpenStack** APIs.
        </p>
      </motion.section>

      {/* 🧠 My Philosophy Section */}
      <motion.section className="space-y-3" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          My Philosophy
        </h2>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4 leading-relaxed">
          <p className="italic border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">
            "The foundation of all good is knowledge; and the foundation of all knowledge is sound reasoning." 
            <span className="block mt-1 text-sm font-normal not-italic text-zinc-500">— Code, like thought, must be logical, purposeful, never ornamental.</span>
          </p>
          
          <div className="space-y-2">
            <p className="font-medium text-zinc-700 dark:text-zinc-300">Two core principles guide my engineering:</p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li><span className="font-semibold">Code Minimalism</span> — fewer lines, cleaner minds. Avoid needless abstraction.</li>
              <li><span className="font-semibold">Sovereign Data</span> — Data belongs to the users. No exceptions. <q className="italic">Long live DApps.</q></li>
            </ol>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}
