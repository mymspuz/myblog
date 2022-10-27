import React from 'react'
import { Blog } from 'presentation/pages'
import { makeRemoteSignIn } from 'main/factories/usecases/'
import { IValidation } from 'presentation/protocols'

const MakeBlog: React.FC = () => {
    const remoteAuthentication = makeRemoteSignIn()
    const validationComposite: IValidation = {validate:(fieldName, input) => 'test'}

    return (
        <Blog
            auth={remoteAuthentication}
            validation={validationComposite}
        />
    )
}

export default MakeBlog