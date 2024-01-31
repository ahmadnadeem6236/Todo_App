"use client";
import useTodoStore from "@/store/store";
import { count } from "console";
import { Children, EventHandler, useState } from "react";

export default function Home() {
  const todos = useTodoStore((state) => state.todos);
  let count = useTodoStore((state) => state.count);
  const addTodo = useTodoStore((state) => state.addTodo);

  const [todo, setTodo] = useState("");

  const setAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };

  const addData = () => {
    const newData = todo;
    const newCount = count++;
    console.log(newCount);
    if (newData.length > 0) {
      addTodo([...todos, newData], newCount);
      setTodo("");
    }
  };

  return (
    <>
      <input
        className="text-black"
        type="text"
        onChange={setAdd}
        onKeyDown={(e) => e.key === "Enter" && addData()}
        value={todo}
      />
      <button className=" bg-blue-500" onClick={addData}>
        Add me
      </button>
      <div>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </div>
    </>
  );
}
