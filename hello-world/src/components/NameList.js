import React from "react";
import Person from "./Person";
function NameList() {
  const persons = [
    {
      id: 1,
      name: "John",
      age: 20,
      address: "1234 Main St",
      skills: "viu js",
    },
    {
      id: 2,
      name: "vijay",
      age: 22,
      address: "1235 Main St",
      skills: "react js",
    },
    {
      id: 3,
      name: "parteek",
      age: 21,
      address: "1236 Main St",
      skills: "angular",
    },
  ];
  const personList = persons.map((person) => <Person key={person.id} person={person} />)
  return <div>{personList}</div>;
}

export default NameList;
