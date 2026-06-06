'use client'

import { motion } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'
import { SOCIAL_LINKS } from './data'

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

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* HERO / IDENTITY */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
          I design and build scalable AI and cloud systems powered by distributed architectures and modern infrastructure engineering.
        </p>
      </motion.section>

      {/* CURRENT SIGNAL */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">
          Focus
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I work on large-scale distributed systems and cloud-native platforms, designing architectures that support AI workloads in production environments.
          My current focus is on building systems that combine scalability, automation, and reliability using modern infrastructure tooling.
        </p>
      </motion.section>

      {/* TECH STACK */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">
          Stack
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Python · Golang · JavaScript · Docker · Kubernetes · OpenStack · Cloud Infrastructure · AI Systems
        </p>
      </motion.section>

      {/* CONNECT */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-800 dark:text-zinc-200">
          Connect
        </h3>

        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Open to collaborations in AI systems, cloud infrastructure, and distributed architectures.
        </p>

        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
