import fm from 'front-matter'

const rawPosts = import.meta.glob('./blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const components = import.meta.glob('./blog/*.md', { eager: true })

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

function formatDate(value) {
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return String(value ?? '')
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

export const posts = Object.entries(rawPosts)
  .map(([path, raw]) => {
    const source = String(raw).replace(/\r\n/g, '\n')
    const { attributes } = fm(source)
    const slug = slugFromPath(path)
    const date = attributes.date ?? ''
    return {
      slug,
      title: attributes.title ?? slug,
      date,
      dateLabel: formatDate(date),
      description: attributes.description ?? '',
      audio: attributes.audio ?? '',
      vtt: attributes.vtt ?? '',
      component: components[path]?.default,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPost(slug) {
  return posts.find((post) => post.slug === slug)
}
