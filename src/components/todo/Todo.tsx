import { useState } from "react"
import { TodoForm } from "./TodoForm"
import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from 'uuid';

import "./Todo.scss"

interface Todo {
    id: string,
    title: string
    active: boolean
}

function Todo() {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (data: string) => {
        if(data == "" || data == null || data == undefined)
            return

        setTodos([...todos, {id: uuidv4(), title: data, active: true}])
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div className="todo">
            <TodoForm addTodo={addTodo}/>
            
            {todos.map((todo, key) => (
                <TodoItem key={key} title={todo.title} id={todo.id} deleteTodo={deleteTodo} />
            ))}
        </div>
    )
}

export default Todo