
interface TodoItemProps {
    id: string,
    title: string,
    deleteTodo: (id: string) => void
    toggleEdit: (id: string) => void
}

export const TodoItem = ({id, title, deleteTodo, toggleEdit}: TodoItemProps) => {
    return (
        <div className="todo-item">
            {title}
            <button onClick={() => toggleEdit(id)}>Edit</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    )
}

export default TodoItem