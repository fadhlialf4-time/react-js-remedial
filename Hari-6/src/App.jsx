import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoFilter from "./components/TodoFilter"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("semua")

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "aktif") return !todo.completed
    if (filter === "selesai") return todo.completed
    return true
  })

  return (
    <div className="app-container">
      <div className="todo-wrapper">
      <h1 className="text-color">📝 Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      </div>
    </div>
  )
}

export default App
