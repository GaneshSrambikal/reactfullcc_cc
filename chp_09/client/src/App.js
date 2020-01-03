import React from "react";
import "./App.css";
import Loginfo from './component/Loginfo';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ganesh",
      age: "25",
      isLoggedIn: true
    };
  }
  render() {
    // let verb;
    // if (this.state.isLoggedIn) {
    //   verb = "In";
    // } else {
    //   verb = "Out";
    // }

    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
        
        <Loginfo verb={this.state.isLoggedIn}/>
      </div>
    );
  }
}

// class LogInfo extends React.Component {
//   render() {
//     let verb;
//     if (this.props.verb) {
//       verb = "In";
//     } else {
//       verb = "Out";
//     }
//     return (
//       <div>
//         <h4>You are currently logged {verb} </h4>
//       </div>
//     );
//   }
// }

export default App;
