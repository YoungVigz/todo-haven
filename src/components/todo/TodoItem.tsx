
interface TodoItemProps {
    id: string,
    title: string,
    deleteTodo: (id: string) => void
    toggleEdit: (id: string) => void
    deactivateTodo: (id: string) => void
}

const TodoItem = ({id, title, deleteTodo, toggleEdit, deactivateTodo}: TodoItemProps) => {
    return (
        <div className="todo-item">
            {title}
            <button onClick={() => toggleEdit(id)}>Edit</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
            <button onClick={() => deactivateTodo(id)}>Done!</button>
        </div>
    )
}

export default TodoItem