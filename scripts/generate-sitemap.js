// scripts/generate-sitemap.js
import { writeFileSync, readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE_URL = 'https://livefreehostels.com'

const blogPosts = JSON.parse(
  readFileSync(join(__dirname, '../src/data/blogPosts.json'), 'utf-8')
)

const staticRoutes = [
  '',
  'about',
  'pet-friendly',
  'awards',
  'rishikesh',
  'dehradun',
  'varanasi',
  'groups',
  'experience',
  'contact',
  'hostel-policy',
  'privacy-policy',
  'terms-conditions',
  'data-protection-guidelines',
  'blogs',
]

const blogRoutes = blogPosts.map((post) => `blog/${post.slug}`)
const allRoutes = [...staticRoutes, ...blogRoutes]

const urls = allRoutes
  .map((route) => {
    const loc = route === '' ? `${SITE_URL}/` : `${SITE_URL}/${route}`
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

writeFileSync(join(__dirname, '../public/sitemap.xml'), sitemap)
console.log(`✓ sitemap.xml generated with ${allRoutes.length} URLs`)