import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      selectOption: "orange",
      textArea: "feedback",
      gender: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value
        });
  }
  render() {
    let gender = "You are " + this.state.gender && this.state.gender;
    let favouriteFruit =
      "You're favourite fruit is " + this.state.selectOption &&
      this.state.selectOption;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <textarea
            name="textArea"
            value={this.state.textArea}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="checkbox">
            <input
              name="isFriendly"
              type="checkbox"
              checked={this.state.isfriendly}
              onClick={this.handleChange}
            />
            isFriendly{" "}
          </label>
          <br />
          <label>
            favourite color :
            <select
              name="selectOption"
              value={this.state.selectOption}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="orange">Orange</option>
              <option value="jackfruit">Jackfruit</option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
            </select>
          </label>
          <br />
          <label>
            <input
              name="gender"
              type="radio"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />
          <label>
            <input
              name="gender"
              type="radio"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
          <button>Submit</button>
        </form>
        <h1>{gender}</h1>
        <h2>{favouriteFruit}</h2>
      </div>
    );
  }
}

export default App;
