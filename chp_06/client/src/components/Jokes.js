import React from "react";
import "../styles.css";
export default function Jokes(props) {
  return (
    <div className="content">
      <p style={{ display: props.question ? "block" : "none" }}>
        Question : {props.question}
      </p>
      <p style={{backgroundColor: props.question ? "none" : "gold" }}>
        Answer: {props.punchLine}
        
      </p>
    </div>
  );
}
