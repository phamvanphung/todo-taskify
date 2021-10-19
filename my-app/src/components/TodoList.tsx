import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import './styles.css'

interface Props {
    Todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const TodoList: React.FC<Props> = ({ Todos, setTodos }) => {
    return (
        <div className="todoList">
            {Todos.map((todo) => (
                <SingleTodo todo={todo} key={todo.id} Todos={Todos} setTodos={setTodos} />
            ))}
        </div>
    )
}

export default TodoList;
