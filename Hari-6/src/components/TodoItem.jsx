function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <label
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </label>

      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  )
}

export default TodoItem
