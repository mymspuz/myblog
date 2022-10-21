import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
    isNegative?: boolean;
    'data-testid'?: string;
};

const Spinner: React.FC<Props> = (props: Props) => {
    return (
        <div
            data-testid="spinner"
            {...props}
        >
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

export default Spinner