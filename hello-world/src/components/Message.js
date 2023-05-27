import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitors'
        }
    }
    changeMessage(){
        this.setState({
            message: '2nd message'
        })
    }

    render() {
    return(
        <div>
            <h1>{this.state.message}</h1>
            {/* this is 1st method */}
            <button onClick={() => this.setState({message: 'Hello World'})}>Click Me</button>

            {/* this is 2st method */}
            <button onClick={()=> this.changeMessage()}>Click Me</button>
        </div>
    )
    }
}
export default Message;