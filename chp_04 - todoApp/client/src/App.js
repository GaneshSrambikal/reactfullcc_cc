import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoData from "./todoData";
function App() {
  const todoComponent = TodoData.map(task => <TodoItem key={task.id} task = {task}/>)
  
  return (
    <div className="todo-list">
    <h3>TODO List</h3> 
      {todoComponent}
    </div>
  );
}

export default App;
