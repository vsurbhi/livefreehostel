// scripts/prerender.js
// Runs AFTER `vite build` (client) and `vite build --ssr` (server entry).
// For every route in scripts/routes.js it renders real HTML using the SSR
// bundle, merges it into the client's dist/index.html shell, and writes a
// standalone file so crawlers see fully-formed pages instead of an empty
// <div id="root">.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import { dirname, join } from 'path'
import { getAllRoutes } from './routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')
const serverEntry = join(root, 'dist-server', 'entry-server.js')

const template = readFileSync(join(distDir, 'index.html'), 'utf-8')

// Strip the static title/description that live in the source index.html.
// Without this, the prerendered page would ship TWO <title> tags and TWO
// <meta name="description"> tags — the exact bug (H13) that made Google
// ignore the real, page-specific description on every route.
function stripStaticHead(html) {
  return html
    .replace(/<title>[^<]*<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/i, '')
}

async function main() {
 const { render } = await import(pathToFileURL(serverEntry).href)
  const routes = ['404', ...getAllRoutes()] // '404' -> the catch-all NotFoundPage

  let written = 0
  for (const route of routes) {
    const url = route === '404' ? '/__will_not_match__' : `/${route}`
    const { appHtml, headHtml } = render(url)

    let page = stripStaticHead(template)
    page = page.replace('</head>', `${headHtml}\n</head>`)
    page = page.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const outPath =
      route === ''
        ? join(distDir, 'index.html')
        : route === '404'
        ? join(distDir, '404.html')
        : join(distDir, route, 'index.html')

    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, page)
    written++
  }

  // The server-only bundle has done its job; don't ship it or leave it
  // lying around confusing future deploys.
  rmSync(join(root, 'dist-server'), { recursive: true, force: true })

  console.log(`✓ Prerendered ${written} routes (including 404.html) into dist/`)
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})