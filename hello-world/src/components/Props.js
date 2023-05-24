import React from "react";

// const Props = (props) => <h1>Hello {props.name} a.k.a {props.heroName} </h1>

const Props = props =>{
    //we can not change props value like this
    // props.heroName = 'change_name'

    return (
        <>
            <h1>Hello {props.name} a.k.a {props.heroName} </h1>
            {props.children}
        </>
    )
}

export default Props;