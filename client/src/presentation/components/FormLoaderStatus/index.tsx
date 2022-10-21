import React, { useContext } from 'react'
import Spinner from './Spinner'
import { FormContext } from 'presentation/hooks'

const FormLoaderStatus: React.FC = () => {
    // @ts-ignore
    const { state } = useContext(FormContext)
    const { isLoading, mainError } = state

    return (
        <div data-testid="errorWrap">
            {isLoading && <Spinner />}
            {mainError && (
                <span data-testid="mainError">
                    {mainError}
                </span>
            )}
        </div>
    )
}

export default FormLoaderStatus
