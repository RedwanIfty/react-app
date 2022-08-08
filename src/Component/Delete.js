
import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axiosConfig from './axiosConfig';
const Delete=()=>{
    const{id} = useParams();
    const[errs,setErrs]=useState("");
    useEffect(()=>{
        axiosConfig.post("file/delete/"+id).
        then((succ)=>{
            //setMsg(succ.data.msg);
            window.location.href="";
        },(err)=>{
            window.location.href="/";// setErrs(errs);
            //debugger;
        })
    },[]);
    return(<></>
    )

}
export default Delete;