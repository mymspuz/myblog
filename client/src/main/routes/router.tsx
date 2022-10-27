import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ApiContext } from 'presentation/hooks'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from 'main/adapters/CurrentAccountAdapter'
import DashboardLayout from 'presentation/layouts/dashboard'
import { MakeDashboard, MakeBlog } from 'main/factories/pages'

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
                    <Route path='/' element={ <DashboardLayout /> }>
                        <Route path='/dashboard/app' element={<MakeDashboard />} />
                        <Route path='/dashboard/blog' element={<MakeBlog />} />
                    </Route>
                    {/*<Route path='/signin' element={ <MakeSignIn /> }/>*/}
                    <Route path='/signup' />
                </Routes>
            </BrowserRouter>
        </ApiContext.Provider>
    )
}

export default Router