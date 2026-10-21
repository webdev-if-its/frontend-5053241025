import type { Todo } from '../types'

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

// Level 1 & 2
export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(BASE_URL)
  if (!res.ok) {
    throw new Error('Gagal mengambil data')
  }
  return res.json()
}

// Level 3
export async function addTodo(title: string): Promise<Todo> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false, userId: 1 }),
  })
  if (!res.ok) {
    throw new Error('Gagal menambahkan todo')
  }
  return res.json()
}

// Level 4
export async function updateTodo(id: any, completed: any): Promise<any> {
  throw new Error('TODO')
}

// Level 5
export async function hapusTodo(id: any): Promise<any> {
  throw new Error('TODO')
}
