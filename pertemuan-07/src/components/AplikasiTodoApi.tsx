import { useEffect, useState, type FormEvent } from 'react'

import { addTodo, getTodos, hapusTodo, updateTodo } from '../api/todos'
import type { Todo } from '../types'

export function AplikasiTodoApi() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTodos() {
      try {
        setTodos(await getTodos())
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        setLoading(false)
      }
    }

    void loadTodos()
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const newTodo = await addTodo(title)
      setTodos((currentTodos) => [...currentTodos, newTodo])
      setTitle('')
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
  }

  async function handleToggle(todo: Todo) {
    try {
      const updatedTodo = await updateTodo(todo.id, !todo.completed)
      setTodos((currentTodos) =>
        currentTodos.map((currentTodo) =>
          currentTodo.id === updatedTodo.id ? updatedTodo : currentTodo,
        ),
      )
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
  }

  async function handleDelete(id: number) {
    try {
      await hapusTodo(id)
      setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Todo baru
          <input value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <button type="submit">Tambah</button>
      </form>

      {error && <p>Terjadi error: {error}</p>}
      {loading ? (
        <p>Memuat...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => void handleToggle(todo)}
                />
                {todo.title}
              </label>
              <button type="button" onClick={() => void handleDelete(todo.id)}>
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
