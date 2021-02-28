import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  
  return (
    <div>
      <label id="label">
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} id="chek" />
        {todo.name}
      </label>
    </div>
  )
}