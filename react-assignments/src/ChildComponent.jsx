import React from "react"

export function ChildComponent({person}){
    const hobbiesArray = person.info.hobbies;
    console.log(hobbiesArray)

    return(
        <div>
        <h1>Name: {person.name}</h1>
        <h2>Age: {person.info.age}</h2>
        <h2>city: {person.info.city}</h2>
    
        <h2>{hobbiesArray.map((hobbies)=>(
        hobbies)  )}</h2>
     
        </div>
    )
}

export default ChildComponent;