import React from "react";

// const Props = (props) => <h1>Hello {props.name} a.k.a {props.heroName} </h1>

// const Props = props =>{
//     //we can not change props value like this
//     // props.heroName = 'change_name'

//     return (
//         <>
//             <h1>Hello {props.name} a.k.a {props.heroName} </h1>
//             {props.children}
//         </>
//     )
// }

// // 2nd way of destructuring props
// const Props = ({name, heroName}) =>{
//     return (
//         <>
//             <h1>Hello {name} a.k.a {heroName} </h1>
//         </>
//     )
// }

// 3rd way of destructuring props
const Props = props =>{
    const {name, heroName} = props;
    return (
        <>
            <h1>Hello {name} a.k.a {heroName} </h1>
        </>
    )
}

export default Props;