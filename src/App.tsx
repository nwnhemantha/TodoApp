import React, { useCallback, useState} from 'react';
import Button from './components/Button'
import Input from './components/InputField'
import TodoLIst from './components/TodoLIst'

// eslint-disable-next-line no-unused-vars
enum Status { pending, done}

interface List {
  text:string,
  status: Status
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<List[]>([]);

  const onInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      setTodo(event.target.value);
  },[])

  const onDelete = useCallback((index: number) => {
    const arr = todos.filter((item, key) => key !== index)
    setTodos(arr)
  },[todos])

  const onComplete = useCallback((index: number, status: Status) => {
    const newTodos = [...todos];
    const newStatus = status === Status.done? Status.pending : Status.done;
    
    newTodos[index].status = newStatus;
    
    setTodos(newTodos);
  },[todos])

  const onAdd = useCallback(() => {
    if(todo) {
      setTodos([...todos, {
        text: todo,
        status: Status.pending
      }])
      setTodo('');
    }
    
  },[todo])

  return (
    <div className="container mx-auto w-6/12 mt-16">
        <h3 className="my-4 text-center font-extrabold text-indigo-500">MY TODO</h3>
      <div className="flex justify-between">
          <Input classNames="w-10/12" onChange={onInputChange} value={todo}/>
          <Button text="Add" onClick={onAdd} type="primary" classNames="w-2/12" />
      </div>
      <div className="my-2">
        <TodoLIst list={todos} onDelete={onDelete} onComplete={onComplete} />
      </div>
    </div>
  );
}

export default App;
