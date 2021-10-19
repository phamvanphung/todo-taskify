import React, { useState } from 'react';
import './App.css';
import { Todo } from './model'
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [Todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...Todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(Todos);
  return (
    <div className="App">
      <span className="Heading"> TaskIFY</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList Todos={Todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
