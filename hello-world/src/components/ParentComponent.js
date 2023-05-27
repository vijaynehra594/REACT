import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           parentname: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
      }
      greetParent(childname) {
        alert(`hello ${this.state.parentname} from ${childname}`)
    }
  render() {
   
    return ( 
        <div>
            <ChildComponent greetHandler={this.greetParent} />
        </div>
    )
  }
}

export default ParentComponent