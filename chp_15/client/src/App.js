import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      character: {},
      loading: false
    };
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("https://swapi.co/api/people/1/")
      .then(Response => Response.json())
      .then(data => {
        this.setState({
          character: data,
          loading: false
        });
      });
  }

  render() {
    const text = this.state.loading ? (
      <h1>loading</h1>
    ) : (
      <h1>{this.state.character.name}</h1>
    );
    return <div className="App">{text}</div>;
  }
}

export default App;
