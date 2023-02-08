import React from 'react'
import { makeRemoteSignIn } from '../../usecases'
import { IValidation } from '../../../../presentation/protocols'
import { BlogNew } from '../../../../presentation/pages'

const MakeBlogNew: React.FC = () => {
    const remoteAuthentication = makeRemoteSignIn()
    const validationComposite: IValidation = {validate:(fieldName, input) => 'test'}

    return (
        <BlogNew
            auth={remoteAuthentication}
            validation={validationComposite}
        />
    )
}

export default MakeBlogNew