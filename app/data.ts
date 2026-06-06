
type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}




export const BLOG_POSTS: BlogPost[] = [
  {
  title: 'Building an Adaptive IPFS-Based Distributed Storage System',
  description: 'An in-depth article on designing a distributed storage system inspired by IPFS, focusing on adaptive peer selection, replication strategies, and consistency control under load testing.',
  link: '/blog/adaptive-ipfs-based-system',
  uid: 'blog-adaptive-ipfs-distributed-storag',
},
  {
  title: 'Building a PaaS Platform with OpenStack APIs for ATM Mobilis',
  description: 'A systems-focused article on designing and orchestrating a cloud PaaS platform using OpenStack APIs, covering compute, networking, storage provisioning, and infrastructure lifecycle management.',
  link: '/blog/openstack-paas-atm-mobilis',
  uid: 'blog-openstack-paas-atm-mobilis',
},{
  title: 'Using Zero-Knowledge Proofs in My Blockchain System (Huawei Innovation Track)',
  description: 'A practical implementation of zk-SNARKs and zk-STARK-inspired techniques inside a blockchain system for privacy-preserving verification such as age validation and secure data constraints.',
  link: '/blog/zkp-blockchain-huawei-innovation-track',
  uid: 'blog-zkp-blockchain-huawei-innovation-track',
} ,
  {
    title: 'Exploring the Intersection of idk',
    description: 'How idk is changing the way we design',
    link: '/blog/idk',
    uid: 'blog-1',
    },{
    title: 'Collections of React Landing Pages',
    description: 'A curated article featuring the best and most creative React landing page templates and inspirations.',
    link: '/blog/react-landings',
    uid: 'blog-react-landings',
  },
  {
    title: 'Python Automation & Scraping',
    description: 'A comprehensive article on automating tasks and scraping data using Python, with real-world examples and code.',
    link: '/blog/python-automation-scraping',
    uid: 'blog-python-automation-scraping',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/0xquirkai',
  },

  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/khalil-tahraoui/',
  },

{
label :"Email",
link:"mailto:Khalil.tahraoui1@gmail.com"
}
]

export const EMAIL = 'khalil.tahraoui1@gmail.com'
