import React, {Component} from 'react';
import './Cal.scss'
import Num from "./num";

class Cal extends Component {

    state = {
        num1 : 0,
        num2 : 0,
        sum : 0
    };

    render() {
        let {num1, num2, sum} = this.state;
        return (
            <div className='cal-style'>
                <div><Num num={num1} handleChange={this.handleNum1Change}/> </div>
                <div><Num num={num2} handleChange={this.handleNum2Change}/></div>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMul}>*</button>
                <button onClick={this.handleDiv}>/</button>
                <div>
                    값 : {sum}
                </div>
            </div>
        );
    }

    handleNum1Change = event => this.setState({
        num1 : parseInt(event.target.value)
    });

    handleNum2Change = event => this.setState({
        num2 : parseInt(event.target.value)
    });


    handlePlus = () => this.setState({
        sum : this.state.num1 + this.state.num2
    });

    handleMinus = () => this.setState({
        sum : this.state.num1 - this.state.num2
    });

    handleMul = () => this.setState({
        sum : this.state.num1 * this.state.num2
    });

    handleDiv = () => this.setState({
        sum : this.state.num1 / this.state.num2
    });
}



export default Cal;