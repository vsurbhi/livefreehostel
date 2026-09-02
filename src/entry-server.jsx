// src/entry-server.jsx
// Used ONLY at build time by scripts/prerender.js (via `vite build --ssr`).
// It never ships to the browser. It renders one route to a string using
// React's own server renderer — no headless Chromium, no extra runtime.
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PetFriendlyPage from './pages/PetFriendlyPage'
import AwardsPage from './pages/AwardsPage'
import DestinationPage from './pages/DestinationPage'
import GroupsPage from './pages/GroupsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import HostelPolicy from './pages/HostelPolicy'
import LegalPage from './pages/LegalPage'
import TermsConditions from './pages/TermsConditions'
import DataProtectionGuidelines from './pages/DataProtectionGuidelines'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import NotFoundPage from './pages/NotFoundPage'
import { Routes, Route } from 'react-router-dom'

// Same route table as src/Router.jsx, but with EAGER imports.
// React.lazy + Suspense cannot resolve synchronously inside renderToString,
// so the SSR-only entry point needs its own non-lazy copy of the routes.
// The browser bundle (src/Router.jsx) is untouched and keeps lazy-loading
// for a fast first paint.
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="pet-friendly" element={<PetFriendlyPage />} />
        <Route path="awards" element={<AwardsPage />} />
        <Route path="rishikesh" element={<DestinationPage city="rishikesh" />} />
        <Route path="dehradun" element={<DestinationPage city="dehradun" />} />
        <Route path="varanasi" element={<DestinationPage city="varanasi" />} />
        <Route path="groups" element={<GroupsPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="hostel-policy" element={<HostelPolicy />} />
        <Route path="privacy-policy" element={<LegalPage />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="data-protection-guidelines" element={<DataProtectionGuidelines />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export function render(url) {
  const helmetContext = {}

  const appHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  )

  const { helmet } = helmetContext

  return {
    appHtml,
    headHtml: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].join('\n'),
  }
}