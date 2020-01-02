import React from "react";
import '../style.css';
export default function TodoItem(props) {
  return (
    <div className="todo-item">
      <ul>
        <li>
          <input type="checkbox"  checked={props.completed} /> <p style={{textDecoration: props.completed? "line-through":""}}> {props.task}</p>
        </li>
      </ul>
    </div>
  );
}
