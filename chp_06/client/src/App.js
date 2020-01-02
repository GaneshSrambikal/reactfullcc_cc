import React from "react";
import "./App.css";
import Jokes from "./components/Jokes";
import JokesData from "./jokesData";
function App() {
  const jokeComponents = JokesData.map(joke => (
    <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return (
    <div className="App">
      <h2>Jokes</h2>
      <div className="container">{jokeComponents}</div>
    </div>
  );
}

export default App;
