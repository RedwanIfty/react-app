import axios from 'axios';
import {useState} from 'react';
const Students=()=>{
    const[students,setStudents]=useState({});
    const LoadAPIData=()=>{
        axios.get("https://mocki.io/v1/72353acd-8db8-4293-9df4-2e6c22920b55").
        then((rsp)=>{
            setStudents(rsp.data.Students[0]);
        },(err)=>{
            debugger;
        });
    }
    return(
        <div>
            <button onClick={LoadAPIData}>Load From API</button><br></br>
            
            <fieldset>
            <label>Student Name : </label>
            <label>{students.Name}</label><br></br>
            <label>Student ID : </label>
            <label>{students.Id}</label><br></br>
            <label>Cgpa : </label>
            <label>{students.Cgpa}</label><br></br>
            <label>Dob : </label>
            <label>{students.Dob}</label><br></br>
            </fieldset>
        </div>
    );
}
export default Students