import React from "react";
import "./App.css";
import { Component } from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header username="Ganesh" />
        <Greeting />
        <Clock />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome , {this.props.username}</p>
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;

    if (hours === 12 && hours < 17) {
      timeOfDay = "Afternoon";
    } else if (hours < 12) {
      timeOfDay = "Morning";
    } else {
      timeOfDay = "Evening";
    }
    return (
      <div>
        <h2>Good {timeOfDay} , to you sir/madam</h2>
      </div>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h3>It is {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;
