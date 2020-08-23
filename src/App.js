import React, {Component} from 'react';
import './App.css';
import Button from "./components/Button.js";

class App extends Component{

  constructor(prompt){
      super(prompt);

    // current state
      this.state = {
        current : "0",
        previous : []
      }
  }

  reset = () => {

    this.setState({result:0});
  }

  addToCurrent = () =>{

    this.setState({current:this.state.current + Symbol});
  }

  render() {
    return (
      <div className="App">
       <input className = "result" type = "text" value = {this.state.current}></input>
      </div>
    );
  }
}


export default App;
