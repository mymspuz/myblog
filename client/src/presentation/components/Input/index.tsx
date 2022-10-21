import React, {useContext, useState} from 'react'

import { FormContext } from 'presentation/hooks'

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    title?: string
    hideStatus?: boolean
}

const Input: React.FC<IInputProps> = (props: IInputProps) => {
    // @ts-ignore
    const { state, setState } = useContext(FormContext)
    const stateName = `${props.name}Error`
    const error = state[stateName]
    const [isActiveFocus, setIsActiveFocus] = useState(false)

    const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
        event.target.readOnly = false
        setIsActiveFocus(true)
    }

    const handleInputChange = (event: React.FocusEvent<HTMLInputElement>): void => {
        setState({...state, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <input
                {...props}
                readOnly
                onFocus={enableInput}
                onChange={handleInputChange}
                onBlur={() => setIsActiveFocus(false)}
            />
            <label>{props.title}</label>
        </div>
    )
}

export default Input