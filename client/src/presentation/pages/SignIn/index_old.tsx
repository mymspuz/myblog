import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

import { IValidation } from 'presentation/protocols'
import { ISignIn } from 'domain/usecases'
import { ApiContext, FormContext } from 'presentation/hooks'
import { FormLoaderStatus, Input } from 'presentation/components'
import Button from '@mui/material/Button'

type SignInProps = {
    validation: IValidation
    auth: ISignIn
}

const SignIn: React.FC<SignInProps> = ({ validation, auth }: SignInProps) => {
    const { setCurrentAccount } = useContext(ApiContext)
    const navigate = useNavigate()
    const [state, setState] = useState({
        isLoading: false,
        isFormInvalid: true,
        login: '',
        password: '',
        loginError: '',
        passError: '',
        mainError: ''
    })

    useEffect(() => {
        const { login, password } = state
        const formData = { login, password }
        const loginError = validation.validate('login', formData)
        const passError = validation.validate('password', formData)

        setState({
            ...state,
            loginError,
            passError,
            isFormInvalid: !!loginError || !!passError
        })
    }, [state.login, state.password])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        try {
            if (state.isLoading || state.isFormInvalid) {
                return
            }
            setState({...state, isLoading: true})

            const account = await auth.signIn({
                login: state.login,
                password: state.password
            })

            if (setCurrentAccount) {
                setCurrentAccount(account)
            }
            navigate('/')
        } catch (error: any) {
            setState({
                ...state,
                isLoading: false,
                mainError: error.message
            })
        }
    }

    return (
        <div>
            <Button
                variant="contained"
                onClick={() => console.log('123')}
            >
                Hello World
            </Button>
            <div>
                <FormContext.Provider value={{ state, setState }}>
                    <form
                        data-testid="loginForm"
                        onSubmit={handleSubmit}
                    >
                        <h1>Login with your account</h1>

                        <Input
                            autoComplete="off"
                            title="Enter your e-mail"
                            type="email"
                            name="email"
                        />

                        <Input
                            autoComplete="off"
                            title="Enter your password"
                            type="password"
                            name="password"
                            minLength={4}
                        />
                        <div>
                            <Button
                                type="submit"
                                disabled={state.isFormInvalid}
                                title="Login"
                                data-testid="loginButton"
                            />
                            <Link
                                data-testid="signUpPage"
                                to="/signup"
                            >
                                Create account
                            </Link>
                        </div>
                        <FormLoaderStatus />
                    </form>
                </FormContext.Provider>
            </div>
        </div>
    )
}

export default SignIn