import React from "react";
import '../style.css';
export default function TodoItem(props) {

    return (
      <div className="todo-item">
        <ul>
          <li>
            <input type="checkbox"  checked={props.item.completed} onChange={()=>{props.handleChange(props.item.id)}}/> <p style={{textDecoration: props.item.completed ? "line-through":""}}> {props.item.task}</p>
          </li>
        </ul>
      </div>
    );
  
}
