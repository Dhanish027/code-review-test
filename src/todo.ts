export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function addTodo(todos: Todo[], title: string): Todo[] {
  const todo: Todo = {
    id: todos.length + 1,
    title,
    completed: false
  };

  return [...todos, todo];
}
