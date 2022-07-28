import axios from 'axios';
import {useState} from 'react';
import Main from './Main';
const Department=()=>{
    const[department,setDepartment]=useState({});
    const LoadAPIData=()=>{
        axios.get("https://mocki.io/v1/72353acd-8db8-4293-9df4-2e6c22920b55").
        then((rsp)=>{
            setDepartment(rsp.data);
        },(err)=>{
            debugger;
        });
    }
    return(
        <div>
              <button onClick={LoadAPIData}>Load From API</button><br></br>
          
            <fieldset>
            <label>Department Name : </label>
            <label>{department.Name}</label><br></br>
            <label>ID : </label>
            <label>{department.Id}</label>
            </fieldset>
        </div>
    );
}
export default Department