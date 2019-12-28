import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="todo-list">
    <h3>TODO List</h3> 
    <TodoItem />
     <TodoItem />
     <TodoItem />
     <TodoItem />
     <TodoItem />
     <TodoItem />
     <TodoItem />
    </div>
  );
}

export default App;
