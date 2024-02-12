
interface TodoItemProps {
    id: string,
    title: string,
    deleteTodo: (id: string) => void
}

export const TodoItem = ({id, title, deleteTodo}: TodoItemProps) => {
    return (
        <div className="todo-item">
            {title}
            <button>Edit</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    )
}

export default TodoItem