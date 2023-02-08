import React from 'react'
import { IValidation } from 'presentation/protocols'
import { ISignIn } from 'domain/usecases'

type DashboardProps = {
    validation: IValidation
    auth: ISignIn
}

const Dashboard: React.FC<DashboardProps> = ({ validation, auth }: DashboardProps) => {
    return (
        <h1>Dashboard page</h1>
    )
}

export default Dashboard