import { lazy } from 'react'

// components
import NotFound from '../components/common/notFound'

// Lazy load
const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import("../pages/about"))
const Projects = lazy(() => import("../pages/projects"))
const Serve = lazy(() => import('../pages/serve'))

// Routes Config
export const routes = [
    { path: '/', element: <Home />, index: true },
    { path: '/about', element: <About /> },
    { path: '/projects', element: <Projects /> },
    { path: '/serve', element: <Serve /> },
    { path: "*", element: <NotFound /> }
]