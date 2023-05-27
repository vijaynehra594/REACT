import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler = () => {
      this.setState({
        message: 'world'
      })
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'world'
    //     })
    //     console.log(this)
    // }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click this is best approach</button>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
        {/* <button onClick={this.clickHandler}>click</button> */}
      </div>
    )
  }
}

export default EventBind