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
      {/* 🌟 1. About Me Section */}
      <motion.section className="space-y-3" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          1. About Me
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I am <strong> Khalil TAHRAOUI </strong> Computer Systems Engineer and a Master’s graduate from the École Nationale Polytechnique d'Oran (ENPO-MA). I sit at the intersection of  <strong>distributed systems , scalable cloud infrastructure and advanced cryptography </strong> Driven by complex technical challenges, I have a proven track record of leading engineering teams to victory in high-stakes competitions like the  Huawei ICT Competition (National Level) and various hackathons, proving my ability to design and execute under extreme constraints.
        </p>
      </motion.section>

     {/* 💻 2. What I Do Section */}
      <motion.section className="space-y-3" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          2. What I Do
        </h2>
      
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I build resilient, secure, and highly scalable digital infrastructure. My expertise combines decentralized intelligence and advanced security with cloud and platform engineering. This involves architecting trustless peer-to-peer networks and integrating cryptographic protocols like Zero-Knowledge proofs to guarantee absolute privacy and data integrity. Alongside security, I design large-scale, high-availability distributed systems using modern containerization and orchestration layers, backed by hands-on experience <a href="#" className="underline text-zinc-800 dark:text-zinc-200 hover:opacity-80 transition-opacity">deploying enterprise-grade PaaS solutions</a>.
        </p>
      </motion.section>

      {/* 🧠 3. My Philosophy Section */}
      <motion.section className="space-y-3" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
          3. My Philosophy
        </h2>
       
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4 leading-relaxed">
          <p className="italic border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 font-medium my-4">
            "True innovation requires balancing absolute security with seamless scalability."
          </p>
          <p>
            I believe that the future of technology belongs to systems that are distributed by design and secure by default. I don't just build architecture that works; I engineer systems that endure. For me, engineering is a team sport—true success comes from combining rigorous academic research with pragmatic, battle-tested execution to solve real-world infrastructure bottlenecks.
          </p>
        </div>
      </motion.section>
    </motion.main>
  );
}
