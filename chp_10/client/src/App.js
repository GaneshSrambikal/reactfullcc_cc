import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "http://www.placekitten.com/100/100",
      width: 100,
      height: 100
    };
  }
  render() {
    return (
      <div className="App">
        <img
          onMouseOver={() => {
            console.log("hovered.");
          }}
          src={this.state.data}
          alt="picturesofmurray"
        ></img>
        <button
          onClick={() => {
            this.setState({
              data:
                "http://www.placekitten.com/" +
                this.state.width +
                "/" +
                this.state.height,
              width: this.state.width + 100,
              height: this.state.height + 100
            });
            console.log(this.state.data);
            console.log(
              "next ratio :" + this.state.width + " X " + this.state.height
            );
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default App;
