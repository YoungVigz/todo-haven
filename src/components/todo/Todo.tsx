import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm"
import { TodoEdit } from "./TodoEdit";
import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

import "./Todo.scss"


interface Todo {
    id: string,
    title: string
    active: boolean
    isEditing: boolean
}

function Todo() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(()=> {
        axios.get("http://localhost:4000/todo/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1Y2UzZWQwNDc1NjZhM2MxYjkyNzQ5ZCIsImVtYWlsIjoidmlnekBnbWFpbC5jb20iLCJsb2dpbiI6InZpZ3oiLCJwYXNzd29yZCI6IiQyYiQxMCR3b2JoN2suYkpZT041VFVVMVZqNHdlamIxQWdBNHZsc2pYUUkuT1V2MUp2emJhM0tEWGhOQyIsIl9fdiI6MH0sImlhdCI6MTcwODEwOTg2NywiZXhwIjoxNzA4MTEzNDY3fQ.jl4sidvrvMc5QMmyyBfoMpHIC3264_00dbJBRoyiN0U")
        .then(d => {
            const newData: Array<Todo> = d.data.map((todo: any) => ({id: todo._id, title: todo.title, active: true, isEditing: false}))
            newData.forEach(todo => setTodos([...todos, todo]))
        })
        .catch(e => console.log(e))
    },[])

    const addTodo = (title: string) => {
        if(title == "" || title == null || title == undefined)
            return

        setTodos([...todos, {id: uuidv4(), title, active: true, isEditing: false}])
    }

    const toggleEdit = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTodo = (id: string, newTitle: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, title: newTitle, isEditing: !todo.isEditing} : todo))
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const deactivateTodo = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, active: !todo.active} : todo))
    }

    return (
        <div className="todo">
            <TodoForm addTodo={addTodo}/>
            
            {todos.map((todo, key) => 
                todo.isEditing ? 
                    (<TodoEdit key={key} id={todo.id} title={todo.title} editTodo={editTodo}/>) : 
                    (<TodoItem key={key} title={todo.title} id={todo.id} deleteTodo={deleteTodo} toggleEdit={toggleEdit} deactivateTodo={deactivateTodo}/>) 
            )}
        </div>
    )
}

export default Todo