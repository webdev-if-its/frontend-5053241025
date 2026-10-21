import type { Todo } from '../types'

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

// Level 1 & 2
export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(BASE_URL)
  return res.json() as Promise<Todo[]>
}

// Level 3
export async function addTodo(title: any): Promise<any> {
  throw new Error('TODO')
}

// Level 4
export async function updateTodo(id: any, completed: any): Promise<any> {
  throw new Error('TODO')
}

// Level 5
export async function hapusTodo(id: any): Promise<any> {
  throw new Error('TODO')
}
