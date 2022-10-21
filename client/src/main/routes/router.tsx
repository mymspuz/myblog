import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { ApiContext } from 'presentation/hooks'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from 'main/adapters/CurrentAccountAdapter'
import MakeSignIn from 'main/factories/pages/SignIn'

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
                    <Route path='/' element={ <MakeSignIn /> }/>
                    {/*<Route path='/signin' element={ <MakeSignIn /> }/>*/}
                    <Route path='/signup' />
                </Routes>
            </BrowserRouter>
        </ApiContext.Provider>
    )
}

export default Router