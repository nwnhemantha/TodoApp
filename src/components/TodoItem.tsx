import React, { Fragment } from 'react';
import { List } from 'antd';
import Button from './Button';

// eslint-disable-next-line no-unused-vars
enum Status { pending, done}

interface Props{
    item: {
        text: string,
        status: number,
    }
    index: number,
    classNames?: string,
    onDelete: (key: number) => void
    onComplete: (key: number, status: Status) => void
}

const TodoItem: React.FC<Props> = ({ item, onDelete, onComplete, index, classNames}: Props) =>  {

    return (
        <Fragment>
            <List.Item className={classNames}>
                <List.Item.Meta
                description={item.text}
                className={item.status === Status.pending? "" : "line-through"}
                />
                <div><Button text={item.status === Status.pending? "Done" : "Not Done"} size="small" onClick={ () => onComplete(index, item.status) } /></div>
                <div><Button text="X" size="small" danger classNames="ml-2" onClick={() => onDelete(index)} /></div>
            </List.Item>
        </Fragment>
    )
}

export default TodoItem
