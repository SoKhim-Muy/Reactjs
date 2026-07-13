import React,{useState} from "react";

// វិធីទី2
export const UpdateObject = () => {
    const [student, setStudent] = useState({
        id: 1,
        firstName: "SoKhim",
        lastName: "Muy",
        age: 20,
    });
    const updateStudent1 = () => {
        const newStudent = {
           ...student,
            age: 29,
        };
        setStudent(newStudent);
    };
    const updateStudent2 = () => {
        setStudent({...student, age:29});
    };
    return(
        <div>
            <h3>Before Update:</h3>
            <prep>{JSON.stringify(student, null, 2)}</prep>
            <button onClick={updateStudent1}>Update</button>
            <h3>After Update:</h3>
            <prep>{JSON.stringify(student, null, 2)}</prep>
            <button onClick={updateStudent2}>Update</button>
            <prep>{JSON.stringify(student, null, 2)}</prep>
        </div>
    );
};