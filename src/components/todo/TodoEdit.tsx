import { useState } from "react"

interface TodoEditProps {
    id: string
    title: string
    editTodo: (id: string, newTitle: string) => void
}

export const TodoEdit = ({id, title, editTodo}: TodoEditProps) => {
    const [value, setValue] = useState(title)

    const submitEdit = (e: React.FormEvent) => {
        e.preventDefault()

        editTodo(id, value) 
    }
    
    return (
        <form className="todo-form" onSubmit={submitEdit}>
            <input type="text" value={value} onChange={e => {
                setValue(e.target.value)
            }}/>
            <button type="submit">Edit</button>
    </form>
    )
}