import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import { ApiContext } from 'presentation/hooks'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from 'main/adapters/CurrentAccountAdapter'
import DashboardLayout from 'presentation/layouts/dashboard'
import {MakeDashboard, MakeBlog, MakeBlogNew, MakeSignIn} from 'main/factories/pages'
import {RouterPrivate} from "../../presentation/routes";
import SimpleLayout from "../../presentation/layouts/simple";
import {NotFoundPage} from "../../presentation/pages";

const Router: React.FC = () => {
    return (
        <ApiContext.Provider
            value={{
                setCurrentAccount: setCurrentAccountAdapter,
                getCurrentAccount: getCurrentAccountAdapter
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <RouterPrivate><DashboardLayout /></RouterPrivate> }>
                        <Route index path='/dashboard/app' element={ <RouterPrivate><MakeDashboard /></RouterPrivate> } />
                        <Route path='/dashboard/blog' element={ <RouterPrivate><MakeBlog /></RouterPrivate> } />
                        <Route path='/dashboard/blog/new' element={ <RouterPrivate><MakeBlogNew /></RouterPrivate> } />
                    </Route>
                    <Route element={ <SimpleLayout /> }>
                        <Route index path='/404' element={<NotFoundPage />} />
                    </Route>
                    <Route path='/signin' element={ <MakeSignIn /> }/>
                    <Route path='/signup' />
                    <Route path='*' element={<Navigate to={'/404'} />} />
                </Routes>
            </BrowserRouter>
        </ApiContext.Provider>
    )
}

export default Router