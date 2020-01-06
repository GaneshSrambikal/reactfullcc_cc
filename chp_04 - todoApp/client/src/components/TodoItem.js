import React from "react";
import "../style.css";
export default function TodoItem(props) {
  const styles = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontSize: "15px"
  };

  return (
    <div className="todo-item">
      <ul>
        <li style={{ listStyle: props.item.completed ? "circle" : "disc" }}>
          <input
            type="checkbox"
            checked={props.item.completed}
            onChange={() => {
              props.handleChange(props.item.id);
            }}
          />

          <p style={props.item.completed ? styles : null}>{props.item.task}</p>
        </li>
      </ul>
    </div>
  );
}
