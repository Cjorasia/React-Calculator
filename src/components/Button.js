import React,{Component} from "react";

class Button extends Component{

    render(){

        // calling symbols by props
        // calling action by props giving argument symbol
        return(
            <div className = {`column-${this.props.cols}`}>
            <button className = "calc-button" onClick = {()=>{this.props.action(this.props.symbol)}}>{this.props.symbol}</button>
            </div>

        )
    }
}

export default Button;