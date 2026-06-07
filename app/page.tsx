'use client'

import { motion } from 'motion/react'
import { SOCIAL_LINKS } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* 1. ONE-LINE IDENTITY */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
I design and build scalable AI and cloud systems using distributed architectures, containerized deployments, and cloud orchestration systems.        </p>
      </motion.section>

      {/* 2. CURRENT FOCUS */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">
          Current Focus
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I am currently working on my Master’s thesis, which focuses on a peer-to-peer distributed federated learning system with cloud supervision. The system explores scalable AI execution across distributed nodes while ensuring privacy and trust using cryptographic mechanisms.
        </p>
      </motion.section>

      {/* 3. FEATURED BLOGS */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">
          Featured Blogs
        </h3>

        <div className="space-y-2 text-zinc-600 dark:text-zinc-400">
          <a className="block hover:text-zinc-900 dark:hover:text-zinc-100 transition" href="/blog/adaptive-ipfs-based-system">
           Building an Adaptive IPFS-Based Distributed Storage System
          </a>

          <a className="block hover:text-zinc-900 dark:hover:text-zinc-100 transition" href="/blog/openstack-paas-atm-mobilis">
            Building a PaaS Platform with OpenStack APIs for ATM Mobilis
          </a>

          <a className="block hover:text-zinc-900 dark:hover:text-zinc-100 transition" href="/blog/zkp-blockchain-huawei-innovation-track">
           Using Zero-Knowledge Proofs in Our Blockchain System and Why ?
          </a>
        </div>
      </motion.section>

      {/* 4. CTA */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">
          Connect
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Open to collaborations in AI systems, cloud infrastructure, and distributed architectures.
        </p>

        <div className="flex gap-3 flex-wrap">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm hover:bg-zinc-900 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}

