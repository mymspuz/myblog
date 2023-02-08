import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { ApiContext } from '../../hooks'

type TProps = {
    children: JSX.Element
}
const RouterPrivate: React.FC<TProps> = ({ children }: TProps) => {
    const { getCurrentAccount } = useContext(ApiContext)

    return getCurrentAccount
        ? getCurrentAccount()?.accessToken
            ? children
            : <Navigate to={'/signin'} />
        : null
}

export default RouterPrivate