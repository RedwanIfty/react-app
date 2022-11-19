
import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axiosConfig from './axiosConfig';
const Delete=()=>{
    const{id} = useParams();
    const[errs,setErrs]=useState("");
    useEffect(()=>{
        axiosConfig.post("delete/"+id).
        then((succ)=>{
            debugger
            //setMsg(succ.data.msg);
            window.location.href="/add-beneficiary";
        },(err)=>{ 
            window.location.href="/";// setErrs(errs);
            //debugger;
        })
    },[]);
    return(<></>
    )

}
export default Delete;