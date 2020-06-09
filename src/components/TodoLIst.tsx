import React, { Fragment } from 'react';
import TodoItem from './TodoItem'

// eslint-disable-next-line no-unused-vars
enum Status { pending, done}

interface List {
    text:string,
    status: Status,
}

interface Props {
    list: List[] | undefined,
    onDelete: (key: number) => void,
    onComplete: (key: number, status: Status) => void,
}

const TodoLIst: React.FC<Props> = ({ list, onDelete, onComplete }: Props) => {

    return (
        <Fragment>
            {
                list?.map( (item, key) => <TodoItem onComplete={onComplete} onDelete={onDelete} key={key} index={key} item={item} />)
            }
        </Fragment>
    )
}

export default TodoLIst
