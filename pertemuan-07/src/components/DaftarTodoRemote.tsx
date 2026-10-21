import { useEffect, useState } from 'react'

import { getTodos } from '../api/todos'
import type { Todo } from '../types'

export function DaftarTodoRemote() {
  const [todos, setTodos] = useState<Todo[]>([])
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

  if (loading) {
    return <p>Memuat...</p>
  }

  if (error) {
    return null
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
