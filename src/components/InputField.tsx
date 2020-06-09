import React, { Fragment } from 'react';
import { Input } from 'antd';

interface Props{
    classNames?: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<Props> = ({ classNames, onChange, value }: Props) =>  {
    return (
        <Fragment>
            <Input placeholder="add your task here ..." className={classNames} onChange={onChange} value={value}/>
        </Fragment>
    )
}

export default InputField
