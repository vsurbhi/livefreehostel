import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './Layout'
import PageLoader from './components/PageLoader'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const PetFriendlyPage = lazy(() => import('./pages/PetFriendlyPage'))
const AwardsPage = lazy(() => import('./pages/AwardsPage'))
const DestinationPage = lazy(() => import('./pages/DestinationPage'))
const GroupsPage = lazy(() => import('./pages/GroupsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const HostelPolicy = lazy(() => import('./pages/HostelPolicy'))
const LegalPage = lazy(() => import('./pages/LegalPage'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))
const DataProtectionGuidelines = lazy(() => import('./pages/DataProtectionGuidelines'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// wraps each lazy page in Suspense so navigation shows a loader instead of a blank screen
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
)

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: withSuspense(HomePage) },
        { path: 'about', element: withSuspense(AboutPage) },
        { path: 'pet-friendly', element: withSuspense(PetFriendlyPage) },
        { path: 'awards', element: withSuspense(AwardsPage) },
        { path: 'rishikesh', element: <Suspense fallback={<PageLoader />}><DestinationPage city="rishikesh" /></Suspense> },
        { path: 'dehradun', element: <Suspense fallback={<PageLoader />}><DestinationPage city="dehradun" /></Suspense> },
        { path: 'varanasi', element: <Suspense fallback={<PageLoader />}><DestinationPage city="varanasi" /></Suspense> },
        { path: 'groups', element: withSuspense(GroupsPage) },
        { path: 'contact', element: withSuspense(ContactPage) },
        { path: 'hostel-policy', element: withSuspense(HostelPolicy) },
        { path: 'privacy-policy', element: withSuspense(LegalPage) },
        { path: 'terms-conditions', element: withSuspense(TermsConditions) },
        { path: 'data-protection-guidelines', element: withSuspense(DataProtectionGuidelines) },
        { path: 'blogs', element: withSuspense(BlogPage) },
        { path: 'blog/:slug', element: withSuspense(BlogPostPage) },
        { path: '*', element: withSuspense(NotFoundPage) },
      ],
    },
  ],
  {
    
    future: {
      v7_relativeSplatPath: true,
    },
  }
)