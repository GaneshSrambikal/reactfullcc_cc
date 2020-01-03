import React from "react";
import '../style.css';
export default function TodoItem(props) {
  return (
    <div className="todo-item">
      <ul>
        <li>
          <input type="checkbox"  checked={props.task.completed} /> <p style={{textDecoration: props.task.completed? "line-through":""}}> {props.task.task}</p>
        </li>
      </ul>
    </div>
  );
}
