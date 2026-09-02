// scripts/routes.js
// Single source of truth for every static route that must exist on the site.
// Both generate-sitemap.js and prerender.js import this so the sitemap and
// the actually-built pages can never drift apart again.
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const staticRoutes = [
  '',
  'about',
  'pet-friendly',
  'awards',
  'rishikesh',
  'dehradun',
  'varanasi',
  'groups',
  'contact',
  'hostel-policy',
  'privacy-policy',
  'terms-conditions',
  'data-protection-guidelines',
  'blogs',
]

export function getBlogRoutes() {
  const blogPosts = JSON.parse(
    readFileSync(join(__dirname, '../src/data/blogPosts.json'), 'utf-8')
  )
  return blogPosts.map((post) => `blog/${post.slug}`)
}

export function getAllRoutes() {
  return [...staticRoutes, ...getBlogRoutes()]
}