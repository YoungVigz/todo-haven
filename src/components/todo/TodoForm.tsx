import React, { useState } from "react"

interface TodoFormProps {
    addTodo: (todo: string) => void
}

export const TodoForm = ({addTodo}: TodoFormProps) => {
    const [value, setValue] = useState("")

    const submitTodo = (e: React.FormEvent) => {
        e.preventDefault()

        addTodo(value)
        setValue("")
    }

    return (
        <form className="todo-form" onSubmit={submitTodo}>
            <h1>TODO-Haven</h1>
            <input type="text" value={value} onChange={e => {
                setValue(e.target.value)
            }}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}