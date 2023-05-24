import React from "react";
const Hello = () => {
    // JSX
    // return (
    //         <div>
    //             <h1>Hello Vijay</h1>
    //         </div>
    //     )

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Vijay')
    )
}
export default Hello;