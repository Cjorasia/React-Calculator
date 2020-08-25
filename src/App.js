import React, {Component} from 'react';
import Button from "./components/Button";
import "./css/style.css";

class App extends Component{

  constructor(props){
      super(props);

    // current state
      this.state = {
        current : "0",
        previous : []
      }
  }

  reset = () => {

    this.setState({result:'0'});
  }

  addToCurrent = (symbol) =>{
    console.log("symbol");
    if(["/","-","+", "X"].indexOf(symbol)>-1){
      let {previous} = this.state;
      previous.push(this.state.current+symbol);
      this.setState({previous});
    }
    else{
      if(this.state.current === "0" && symbol !== "."){
        this.setState({current: symbol});

      }
      else{
        this.setState({current: this.state.current + symbol});
      }
  
    }
  }

  render() {

      // array of buttons
      const buttons = [
        {symbol:'C', cols:3, action: this.reset},
        {symbol:'/', cols:1, action: this.addToCurrent},
        {symbol:'7', cols:1, action: this.addToCurrent},
        {symbol:'8', cols:1, action: this.addToCurrent},
        {symbol:'9', cols:1, action: this.addToCurrent},
        {symbol:'X', cols:1, action: this.addToCurrent},
        {symbol:'4', cols:1, action: this.addToCurrent},
        {symbol:'5', cols:1, action: this.addToCurrent},
        {symbol:'6', cols:1, action: this.addToCurrent},
        {symbol:'-', cols:1, action: this.addToCurrent},
        {symbol:'1', cols:1, action: this.addToCurrent},
        {symbol:'2', cols:1, action: this.addToCurrent},
        {symbol:'3', cols:1, action: this.addToCurrent},
        {symbol:'+', cols:1, action: this.addToCurrent},
        {symbol:'0', cols:2, action: this.addToCurrent},
        {symbol:'.', cols:1, action: this.addToCurrent},
        {symbol:'=', cols:1, action: this.addToCurrent}
    ]

  
// creating button component
// looping through const butttons
    return (
      <div className="App">
        {this.state.previous.length > 0 ?
         <div className = "over-flow">{this.state.previous[this.state.previous.length - 1]}</div>
         :null}
       <input className = "result" type = "text" value = {this.state.current}/> 
       {buttons.map((btn, i) =>{
        return <Button key={i} symbol= {btn.symbol} cols = {btn.cols} action={(symbol)=> btn.action(symbol)} />
    })}
      </div>
    );
  }
}


export default App;
