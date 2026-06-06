'use client'
import { motion } from 'motion/react'

import { Magnetic } from '@/components/ui/magnetic'

import {

  EMAIL,
  SOCIAL_LINKS,
} from './data'

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
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
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
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
  I am <span className="font-semibold text-zinc-900 dark:text-zinc-100">Khalil Tahraoui</span>, a Computer Systems Engineer graduating from the École Nationale Polytechnique d'Oran (ENPO-MA).
  <br /><br />

  My Master's thesis focused on the design and implementation of a peer-to-peer (P2P) distributed federated learning system with cloud supervision. I integrated Zero-Knowledge Proof (ZKP) security layers to address privacy, data integrity, and decentralized trust in high-throughput environments.
  <br /><br />

  Beyond research, I developed strong expertise in{" "}
  <span className="font-semibold text-zinc-900 dark:text-zinc-100">large-scale distributed systems</span>,{" "}
  <span className="font-semibold text-zinc-900 dark:text-zinc-100">containerized architectures</span>, using{" "}
  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Docker</span> and{" "}
  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Kubernetes</span>. I also contributed to the deployment of a PaaS platform integrated with ATM Mobilis using OpenStack APIs.
  {" "}
  <a
    href="https://www.openstack.org/"
    target="_blank"
    className="text-zinc-900 dark:text-zinc-100 underline underline-offset-4"
  >
    (OpenStack reference)
  </a>
  .
  <br /><br />

  I also led engineering teams to win the Huawei ICT Competition (National Level) and secured top positions in multiple hackathons, validating system design, scalability, and execution under extreme constraints.
</p>
        </div>
      </motion.section>







      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
       Open to opportunities, contributions, or discussions reach out and let’s create something impactful


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
