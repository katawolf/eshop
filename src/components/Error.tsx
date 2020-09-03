import React, {useEffect} from "react";

interface IProps {
    error?: string;
    cleanError: () => void
}

const Error: React.FC<IProps> = ({error, cleanError}) => {

    useEffect(() => cleanError, [cleanError])

    return <div data-testid={'error'}>
        {error}
    </div>
}

export default Error
export type IErrorProps = IProps