import React, {Component} from 'react';
import './App.css';
import Button from "./components/Button.js";

class App extends Component{

  constructor(prompt){
      super(prompt);

      this.state = {
        current : "0",
        previous : []
      }
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
