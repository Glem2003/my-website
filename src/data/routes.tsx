import { lazy } from 'react'

// components
import NotFound from '../components/common/notFound/notFound'

// Lazy load
const About = lazy(() => import("../pages/about"))
const Projects = lazy(() => import("../pages/projects"))

// Routes Config
export const routes = [
    { path: '/', element: <About />, index: true },
    { path: '/Projects', element: <Projects /> },
    { path: "*", element: <NotFound /> }
]