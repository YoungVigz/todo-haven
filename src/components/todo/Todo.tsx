import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { TodoEdit } from "./TodoEdit";
import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from 'uuid';

import "./Todo.scss"


interface Todo {
    id: string,
    title: string
    active: boolean
    isEditing: boolean
}

function Todo() {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (title: string) => {
        if(title == "" || title == null || title == undefined)
            return

        setTodos([...todos, {id: uuidv4(), title, active: true, isEditing: false}])
    }

    const toggleEdit = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTodo = (id: string, newTitle: string) => {
        console.log(id + " " + newTitle)
        setTodos(todos.map(todo => todo.id === id ? {...todo, title: newTitle, isEditing: !todo.isEditing} : todo))
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div className="todo">
            <TodoForm addTodo={addTodo}/>
            
            {todos.map((todo, key) => 
                todo.isEditing ? 
                    (<TodoEdit key={key} id={todo.id} title={todo.title} editTodo={editTodo}/>) : 
                    (<TodoItem key={key} title={todo.title} id={todo.id} deleteTodo={deleteTodo} toggleEdit={toggleEdit}/>) 
            )}
        </div>
    )
}

export default Todo