import { Component } from "react";

class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : 0
        };
    }

    increment = () => {
        this.setState((prevState) => ({ value:prevState.value + 1 }));
    }
    decrement = () =>{
        this.setState((prevState) => ({value:prevState.value - 1}));
    }

    render(){
        return(
            <div>
            <h1>Here is your next value {this.state.value}</h1>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }

}
export default CounterClass