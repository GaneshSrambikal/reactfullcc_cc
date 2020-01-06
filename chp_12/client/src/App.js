import React from 'react';
import './App.css';
import './component/Coditional'
import Coditional from './component/Coditional';
class App extends React.Component {
  constructor(){
    super()
    this.state= {
      isLoading : true
    };
  }
componentDidMount(){
  setTimeout(() =>{
    this.setState(
      {isLoading:false}
    );
  },1000)
}
  
  render(){
    return (
      <div className="App">
      <Coditional isLoading= {this.state.isLoading}/>
        
      </div>
    );
  }
}

export default App;
