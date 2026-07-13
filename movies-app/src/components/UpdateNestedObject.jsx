import React, {useState} from "react";
export const NestedObject = () => {
    const [person, setPerson] = useState({
        id:1,
        name:"Alice",
        age:19,
        address:{
            street:"123 Main St",
            city:"Wonderland",
            zip:"12345",
        },
    });
    const update = () => {
        setPerson({
            ...person,
            age:18,
            address:{
                ...person.address,
                city:"Phnom Penh",
                zip:"855"
            },
        });
    };
    return(
        <div>
            <h3>Before Update:</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <button onClick={update}>Update</button>
            <h3>After Update:</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </div>
    );
};