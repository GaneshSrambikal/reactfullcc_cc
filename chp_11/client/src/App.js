import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      fontsize: 18
    };
    this.changeCountPlus = this.changeCountPlus.bind(this);
    this.changeCountMinus = this.changeCountMinus.bind(this);
  }
  changeCountPlus() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
        fontsize: prevState.fontsize + 3
      };
    });
  }

  changeCountMinus() {
    if (this.state.count === 0 && this.state.fontsize === 18) {
      this.setState(prevState => {
        return {
          count: (prevState.count = 0),
          fontsize: (prevState.fontsize = 18)
        };
      });
    } else {
      this.setState(prevState => {
        return {
          count: prevState.count - 1,
          fontsize: prevState.fontsize - 3
        };
      });
    }
  }
  render() {
    return (
      <div className="App">
        <h1 style={{ fontSize: this.state.fontsize }}>{this.state.count}</h1>
        <button onClick={this.changeCountPlus}>Increase</button>
        <button onClick={this.changeCountMinus}>Decrease</button>
      </div>
    );
  }
}

export default App;
