import React, {Component} from 'react'
import NewCounter from '../NewCounter/NewCounter';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    this.addCounterHandler = this.addCounterHandler.bind(this)
  }

  addCounterHandler() {
    this.setState((prevState)=>{
      return {
        counter: prevState.counter + 1
      }
    })
  }

  render() {
    return (
      <>
        <h2>Counter {this.state.counter}</h2>
        <NewCounter />
        <button onClick={this.addCounterHandler}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
      </>
    )
  }
}