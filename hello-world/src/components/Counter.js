import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({ count: this.state.count + 2 },()=>{
            console.log("Callback value",this.state.count)
        })
    }
    decrement() {
        this.setState({ count: this.state.count - 2 })
    }

  render() {
    return (
       <div>
         <div>Count - {this.state.count}</div>
         <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
         <button onClick={() => this.increment()}>+2</button><br/>
         <button onClick={() => this.setState({ count: this.state.count - 1 })}>-1</button>
         <button onClick={() => this.decrement()}>-2</button>
       </div>
    )
  }
}

export default Counter