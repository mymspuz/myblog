import React from 'react'
import { SignIn } from 'presentation/pages'
import { makeRemoteSignIn } from 'main/factories/usecases/'
import { makeLoginValidation } from './SignInValidation'

const MakeSignIn: React.FC = () => {
    const remoteAuthentication = makeRemoteSignIn()
    const validationComposite = makeLoginValidation()

    return (
        <SignIn
            auth={remoteAuthentication}
            validation={validationComposite}
        />
    )
}

export default MakeSignIn