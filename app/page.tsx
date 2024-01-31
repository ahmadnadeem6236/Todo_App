"use client";
import useTodoStore from "@/store/store";
import { useState } from "react";

export default function Home() {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const [todoMsg, setTodoMsg] = useState("");
  console.log(todos);
  const setAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoMsg(event.currentTarget.value);
    setNewDescription(event.currentTarget.value);
  };

  const addData = () => {
    if (todoMsg) {
      addTodo(todoMsg);
      setTodoMsg("");
      setNewDescription("");
    }
  };
  const [newDescription, setNewDescription] = useState("");

  const handleUpdateDescription = (todoId: string) => {
    if (newDescription) {
      updateTodo(todoId, newDescription);
      setNewDescription("");
      setTodoMsg("");
    }
  };
  return (
    <>
      <input
        className="text-black"
        type="text"
        onChange={setAdd}
        onKeyDown={(e) => e.key === "Enter" && addData()}
        value={todoMsg || newDescription}
      />
      <button className=" bg-blue-500" onClick={addData}>
        Add me
      </button>
      <div>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.description}{" "}
            <button
              className=" border-2"
              type="button"
              onClick={() => removeTodo(todo.id)}
            >
              clear
            </button>
            <button
              className=" border-2"
              type="button"
              onClick={() => handleUpdateDescription(todo.id)}
            >
              update
            </button>
          </li>
        ))}
      </div>
    </>
  );
}
