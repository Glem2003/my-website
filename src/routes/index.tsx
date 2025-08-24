import { HashRouter, Route, Routes } from "react-router-dom"
import { Suspense } from 'react'

// components
import Loading from "../components/common/loading"

// data
import { routes } from "../data/routes"

const AppRoute = () => {

    return (
        <HashRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {routes.map(({ path, element, index }) => (
                        <Route key={path} path={path} element={element} index={index} />
                    ))}
                </Routes>
            </Suspense>
        </HashRouter>
    )
}

export default AppRoute