import React,{component} from "react";

class Button extends component{

    render(){

        // array of buttons
        cont buttons = [
            {symbol:'C', cols:3, action: this.reset},
            {symbol:'/', cols:1, action: this.addToCurrent},
            {symbol:'7', cols:1, action: this.addToCurrent},
            {symbol:'8', cols:1, action: this.addToCurrent},
            {symbol:'9', cols:1, action: this.addToCurrent},
            {symbol:'x', cols:1, action: this.addToCurrent},
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
        ];

        return(
            <div>
            <button className = "calc-button">1</button>
            
            {buttons.map((btn, i)==>{
                <Button symbol= {btn.symbol} cols = {btn.cols} action={(symbol)=> btn.action} />
            })}
            </div>

        );
    }
}

export default Button;