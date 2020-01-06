import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if(this.state.isLoggedIn){
      this.setState({
        isLoggedIn : false
      });
    }
    else{
      this.setState({
        isLoggedIn :true
      });
    }
   
    
  }
  render() {
    let word;
    this.state.isLoggedIn === true ? (word = "In") : (word = "Out");
    return (
      <div className="App">
        <h1>You are logged {word}</h1>
        <button style={{backgroundColor:this.state.isLoggedIn ? "#4CAF50" : "#f44336"}} onClick={this.handleClick}>Log {word}</button>
      </div>
    );
  }
}

export default App;
