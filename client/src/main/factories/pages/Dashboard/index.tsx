import React from 'react'
import { Dashboard } from 'presentation/pages'
import { makeRemoteSignIn } from 'main/factories/usecases/'
import { IValidation } from 'presentation/protocols'

const MakeDashboard: React.FC = () => {
    const remoteAuthentication = makeRemoteSignIn()
    const validationComposite: IValidation = {validate:(fieldName, input) => 'test'}

    return (
        <Dashboard
            auth={remoteAuthentication}
            validation={validationComposite}
        />
    )
}

export default MakeDashboard