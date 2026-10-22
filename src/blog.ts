import { marked } from 'marked'

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  cover?: string
  tags: string[]
  html: string
  minutes: number
}

const files = import.meta.glob('./content/blog/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

/** Tiny frontmatter parser: `key: value` lines between two `---` lines. */
function parse(raw: string): { meta: Record<string, string>; body: string } {
  const m = raw.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) return { meta: {}, body: raw }
  const meta: Record<string, string> = {}
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':')
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
  }
  return { meta, body: m[2] }
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parse(raw)
    if (meta.draft === 'true' || !meta.title) return null
    const words = body.split(/\s+/).filter(Boolean).length
    return {
      slug: path.split('/').pop()!.replace(/\.md$/, ''),
      title: meta.title,
      date: meta.date ?? '',
      description: meta.description ?? '',
      cover: meta.cover || undefined,
      tags: (meta.tags ?? '').split(',').map((t) => t.trim()).filter(Boolean),
      html: marked.parse(body, { async: false }) as string,
      minutes: Math.max(1, Math.round(words / 200)),
    } as Post
  })
  .filter((p): p is Post => p !== null)
  .sort((a, b) => b.date.localeCompare(a.date))
