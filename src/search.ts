import type { Todo } from './todo';

export function searchTodos(todos: Todo[], query: string): Todo[] {
  const results: Todo[] = [];

  for (const todo of todos) {
    if (todo.title.toLowerCase().includes(query.toLowerCase())) {
      results.push(todo);
    }
  }

  return results;
}
