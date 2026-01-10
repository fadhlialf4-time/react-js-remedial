function TodoFilter({ filter, setFilter }) {
  const filters = ["semua", "aktif", "selesai"]

  return (
    <div className="filters">
      {filters.map(type => (
        <button
          key={type}
          className={filter === type ? "active" : ""}
          onClick={() => setFilter(type)}
        >
          {type.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
