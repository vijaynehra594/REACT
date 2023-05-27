import React from 'react'

function Person({person}) {
  return (
    <div>
        <p>I am {person.name}. I am {person.age} years old. I am from {person.address}. I know {person.skills}</p>
    </div>
  )
}

export default Person