import { lazy } from 'react'

// components
import NotFound from '../components/common/notFound/notFound'

// Lazy load
const About = lazy(() => import("../pages/about"))
const Resume = lazy(() => import("../pages/resume"))
const Projects = lazy(() => import("../pages/projects"))

// Routes Config
export const routes = [
    { path: '/', element: <About />, index: true },
    { path: '/Resume', element: <Resume /> },
    { path: '/Projects', element: <Projects /> },
    { path: "*", element: <NotFound /> }
]