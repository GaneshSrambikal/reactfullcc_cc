import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      unReadMessages: ["a"]
    };
  }
  render() {
    // if (this.state.unReadMessages.length === 0) {
    //   return null;
    // } else {
    //   return (
    //     <div className="App">
    //       <h1>
    //         Your have {this.state.unReadMessages.length} unread messages.{" "}
    //       </h1>
    //     </div>
    //   );
    // }

    //2 method
    // return(
    //   <div className='App'>
    // {this.state.unReadMessages.length > 0 ? <h1>Your have {this.state.unReadMessages.length} unread messages.</h1> :null}
    // </div>
    // )

    //3method
    return (
      <div className="App">
        {this.state.unReadMessages.length > 0 && (
          <h1>Your have {this.state.unReadMessages.length} unread messages.</h1>
        )}
      </div>
    );
  }
}
