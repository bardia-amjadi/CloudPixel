export type Status = 'stable' | 'beta' | 'alpha' | 'experimental'
export type ProductType = 'mobile' | 'desktop' | 'tool' | 'web'

export interface Product {
  slug: string
  name: string
  description: string
  category?: string
  type?: ProductType
  status: Status
  featured?: boolean
  logo?: string
  image?: string
  screenshots?: string[]
  video?: string
  version?: string
  releaseDate?: string
  platforms?: string[]
  features?: string[]
  requirements?: string[]
  downloads?: { label: string; url: string }[]
  links?: { github?: string; docs?: string; website?: string; releases?: string }
}
