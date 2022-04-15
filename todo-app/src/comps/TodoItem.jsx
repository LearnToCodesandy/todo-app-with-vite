import React from 'react'

const TodoItem = ({todo,index,deleteTodoHandler,handleTodoState}) => {
    return (
        <div className="todoitem">
            <p className={todo.state ? "todotext strike-through":"todotext"} onDoubleClick={()=>handleTodoState(index)}>{todo.todo}</p>
            <span className="delete" onClick={()=>deleteTodoHandler(index)}>&#10006;</span>
        </div>

    )
}

export default TodoItem;