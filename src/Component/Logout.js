
import {useState,useEffect}  from 'react';
import axiosConfig from './axiosConfig';
const Logout=()=>{
    useEffect(()=>{
        if(localStorage.getItem('user')!=null){
            var token=localStorage.getItem('user'); 
            var data={token:token}
    }
    debugger
    if(localStorage.getItem('_authToken')!=null){
        var token=localStorage.getItem('user'); 
        var data={token:token}    
    }
        axiosConfig.post("logout",data).
        then((succ)=>{
            debugger
            localStorage.removeItem('user');
                window.location.href="/";
        },(err)=>{ 
           
        })
    },[]);
    return(<h6>logging out</h6>
    )

}
export default Logout;