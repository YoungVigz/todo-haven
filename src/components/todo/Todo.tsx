import {TodoForm} from "./TodoForm"
import TodoItem from "./TodoItem"

import "./Todo.scss"

function Todo() {
    const addTodo = (data: String) => {
        console.log(data)
    }

    return (
        <div className="todo">
            <TodoForm addTodo={addTodo}/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}

export default Todo