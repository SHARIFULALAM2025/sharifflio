export interface TechStack {
  frontend: string[]
  backend: string[]
}

export interface ProjectData {
  id: number
  title: string
  image: string
  fullTitle: string
  description: string
  purpose: string
  githubServer: string
  features: string[]
  techStack: TechStack
  liveLink: string
  githubClient: string
  featured: boolean
  category: string
  role: string
  status: string
}
