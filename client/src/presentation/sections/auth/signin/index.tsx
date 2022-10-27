import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Link,
    Stack,
    IconButton,
    InputAdornment,
    TextField,
    Checkbox,
    FormControlLabel
} from '@mui/material'
import { LoadingButton } from '@mui/lab'

import {Iconify, MUISnackbar} from 'presentation/components'
import { IValidation } from 'presentation/protocols'
import { ISignIn } from 'domain/usecases'
import { ApiContext } from 'presentation/hooks'

type SignInFormProps = {
    validation: IValidation
    auth: ISignIn
}

const SignInForm: React.FC<SignInFormProps> = ({ validation, auth }: SignInFormProps) => {
    const { setCurrentAccount } = useContext(ApiContext)
    const navigate = useNavigate()

    const [state, setState] = useState({
        isLoading: false,
        isFormInvalid: true,
        showPassword: false,
        login: '',
        password: '',
        loginError: '',
        passError: '',
        mainError: ''
    })

    const handleChangeLogin = (event: React.FocusEvent<HTMLInputElement>): void => {
        const loginError = validation.validate('login', { login: event.target.value })
        setState({...state, login: event.target.value, loginError})
    }

    const handleChangePassword = (event: React.FocusEvent<HTMLInputElement>): void => {
        const passError = validation.validate('password', { password: event.target.value })
        setState({...state, password: event.target.value, passError})
    }

    const handleClick = async (): Promise<void> => {
        try {
            if (state.isLoading || state.isFormInvalid) {
                return
            }
            setState({...state, isLoading: true, mainError: ''})

            const account = await auth.signIn({
                login: state.login,
                password: state.password
            })

            if (setCurrentAccount) {
                setCurrentAccount(account)
            }
            navigate('/', { replace: true })
        } catch (error: any) {
            setState({
                ...state,
                isLoading: false,
                mainError: error.message
            })
        }
    }

    useEffect(() => {
        setState((prevState) => { return {...prevState, isFormInvalid: !!prevState.loginError || !!prevState.passError || !prevState.login}})
    }, [state.loginError, state.passError])

    return (
        <>
            {state.mainError && <MUISnackbar color={'error'} content={state.mainError} />}
            <Stack spacing={3}>
                <TextField
                    name='login'
                    label='Login or email address'
                    value={state.login}
                    error={state.loginError !== ''}
                    helperText={state.loginError}
                    onChange={handleChangeLogin}
                />

                <TextField
                    name='password'
                    label='Password'
                    value={state.password}
                    error={state.passError !== ''}
                    helperText={state.passError}
                    onChange={handleChangePassword}
                    type={state.showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setState({...state, showPassword: !state.showPassword})} edge="end">
                                    <Iconify icon={state.showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} sx={{}} width={20} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <FormControlLabel control={<Checkbox name="remember" />} label="Remember me" />
                <Link variant="subtitle2" underline="hover">
                    Forgot password?
                </Link>
            </Stack>

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleClick}
                disabled={state.isFormInvalid}
            >
                Login
            </LoadingButton>
        </>
    )
}

export default SignInForm