// scripts/generate-sitemap.js
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { getAllRoutes } from './routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE_URL = 'https://livefreehostels.com'

const allRoutes = getAllRoutes()
const today = new Date().toISOString().slice(0, 10)

const urls = allRoutes
  .map((route) => {
    const loc = route === '' ? `${SITE_URL}/` : `${SITE_URL}/${route}`
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

writeFileSync(join(__dirname, '../public/sitemap.xml'), sitemap)
console.log(`✓ sitemap.xml generated with ${allRoutes.length} URLs`)