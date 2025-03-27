import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from 'react'

// components
import Loading from "../components/common/loading/loading"

// data
import { routes } from "../data/routes"

const AppRoute = () => {

    return (
        <BrowserRouter basename="/my-website">
            <Suspense fallback={<Loading />}>
                <Routes>
                    {routes.map(({ path, element, index }) => (
                        <Route key={path} path={path} element={element} index={index} />
                    ))}
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoute