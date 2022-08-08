import axios from 'axios';
import {useState} from 'react';
const Load=({dep,st})=>{
    const[department,setDepartment]=useState({});
    const[students,setStudents]=useState({});
    const LoadAPIData=()=>{
        axios.get("https://mocki.io/v1/72353acd-8db8-4293-9df4-2e6c22920b55").
        then((rsp)=>{
            setDepartment(rsp.data);
            setStudents(rsp.data.Students[0]);
        },(err)=>{
            debugger;
        });
    }
    return(
        <div>
            <p>{dep}</p>
            <button onClick={LoadAPIData}>Loa</button>
            <p>{st}</p>
        </div>
    );
}
export default Load;