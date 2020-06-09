import React, { Fragment } from 'react'
import { Button } from 'antd';

type Types = "primary" | "text" | "link" | "ghost" | "default" | "dashed";
type Size = "large" | "middle" | "small";

interface Props {
    text: string,
    type?: Types,
    onClick: () => void,
    classNames?: string,
    size?: Size
    danger?: boolean,
}
const Buttons: React.FC<Props> = ({ text, type, onClick, classNames, size, danger }: Props) => {
    return (
        <Fragment>
            <Button 
            danger={danger} 
            size={size} 
            type={type} 
            className={classNames} 
            onClick={onClick}>{text}
        </Button>
        </Fragment>
    )
}

export default Buttons
