
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
    title: 'Exploring the Intersection of idk',
    description: 'How idk is changing the way we design',
    link: '/blog/idk',
    uid: 'blog-1',
  },

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
