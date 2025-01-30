import React from "react"

export function ChildComponent({person}){
    // deconstructing object
    const {name, info:{age, city, job, hobbies}} = person;

    return(
        <div>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>city: {city}</h2>
        <h2>job: {job}</h2>
        {/* deconstructing array */}
        <h2>hobbies: {hobbies.map((hobbies)=>(
        hobbies))}</h2>
     
        </div>
    )
}

export default ChildComponent;