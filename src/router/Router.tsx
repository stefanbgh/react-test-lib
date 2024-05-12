import { FC } from 'react'

import { BrowserRouter, Routes as BrowserRoutes, Route } from 'react-router-dom'
import { Products, Home, NotFound } from "../pages"
import { Routes } from './Routes'

import PrivateLayout from '../layout/private/PrivateLayout'
import { Navigation } from '../components'

const Router: FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route
                    path={Routes.HOME}
                    element={
                        <PrivateLayout>
                            <Home/>
                        </PrivateLayout>
                    }
                />
                <Route
                    path={Routes.PRODUCTS}
                    element={
                        <PrivateLayout>
                            <Products/>
                        </PrivateLayout>
                    }
                />
                <Route
                    path={Routes.NOT_FOUND}
                    element={
                        <NotFound/>
                    }
                />
            </BrowserRoutes>
        </BrowserRouter>
    )
}

export default Router