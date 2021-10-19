import React, { useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./styles.css"
import TodoList from './TodoList'

interface Props {
    todo: Todo,
    Todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,

}

const SingleTodo: React.FC<Props> = ({ todo, Todos, setTodos }) => {

    const [Edit, setEdit] = useState<boolean>(false);
    const [editTodo, seteditTodo] = useState<string>(todo.todo);
    const handleDone = (id: number) => {
        setTodos(Todos.map((todo) => todo.id == id ? { ...todo, isDone: !todo.isDone } : todo));
    };

    const handleDelete = (id: number) => {
        setTodos(Todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(Todos.map((todo) => (
            todo.id === id ? { ...todo, todo: editTodo } : todo
        )));
        setEdit(false);
    };

    return (
        <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>

            {
                Edit ? (
                    <input type="text"
                        value={editTodo}
                        onChange={(e) => { seteditTodo(e.target.value) }}
                        className="todo__single--text" />
                ) : todo.isDone ? (<s className="todos__single--text">{todo.todo}</s>
                ) : (<span className="todos__single--text">{todo.todo}</span>)


            }

            <div>
                <span className="icon" onClick={() => {
                    if (!Edit && !todo.isDone) {
                        setEdit(!Edit);
                    }
                }
                }>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>



        </form>
    )
}

export default SingleTodo;
