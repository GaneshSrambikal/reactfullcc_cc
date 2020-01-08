import React from "react";
import "../App.css";
export default function FormComponent(props) {
  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={props.data.age}
          onChange={props.handleChange}
        />
      </form>
      <hr />
      <h1>info Detail</h1>
      <p>First Name : {props.data.firstName} </p>
      <p>Last Name : {props.data.lastName}</p>
      <p>Age : {props.data.age}</p>
    </div>
  );
}
