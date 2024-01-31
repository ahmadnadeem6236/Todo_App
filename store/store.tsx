import { todo } from "node:test";
import React from "react";
import { create } from "zustand";

//CRUD app, it is a create read update and delete

type State = {
  count: number;
  todos: string[];
  // status: boolean;
};

type Action = {
  addTodo: (todos: State["todos"], count: State["count"]) => void;
  // delTodo: (count: State["count"], todos: State["todos"]) => void;
};

const useTodoStore = create<State & Action>((set) => ({
  todos: [],
  count: 1,
  addTodo: (todos, count) =>
    set(() => ({ ["todos"]: [...todos], count: (count = count + 1) })),
}));

export default useTodoStore;
