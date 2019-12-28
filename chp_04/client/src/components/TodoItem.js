import React from "react";
import '../style.css';
export default function TodoItem() {
  return (
    <div className="todo-item">
      <ul>
        <li>
          <input type="checkbox" /> <p>do this do that.</p>
        </li>
      </ul>
    </div>
  );
}
