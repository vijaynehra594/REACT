import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //short circuit operator
    return this.state.isLoggedIn && <div>Welcome Vijay</div>

    //tunary condition approach
    // return this.state.isLoggedIn? (
    //       <div>Welcome Vijay</div>
    //     ) : (
    //         <div>Welcome Guest</div>
    //     )

    //element variable approach
    // let message 
    // if (this.state.isLoggedIn) {
    //   message = "Welcome Vijay";
    // } else {
    //   message = "Welcome Guest";
    // }
    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vijay</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome Vijay</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
