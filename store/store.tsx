import { create } from "zustand";
import { nanoid } from "nanoid";

//CRUD app, it is a create read update and delete
interface Todo {
  id: string;
  description: string;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, description: string) => void;
}

const useTodoStore = create<TodoStore>()((set) => ({
  todos: [],
  addTodo: (description: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: nanoid(),
          description,
        } as Todo,
      ],
    }));
  },
  removeTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  updateTodo: (id: string, description: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, description } : todo
      ),
    }));
  },
}));
export default useTodoStore;
