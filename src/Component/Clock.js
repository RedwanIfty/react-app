import React, { useState } from "react";
const Clock=()=>{
    let time=new Date().toLocaleTimeString();
    let hr=new Date().getHours();
    const [currentTime,setCurrentTime]=useState(time);
    const [msg,setMsg]=useState("");
    const updateTime=()=>{
        time=new Date().toLocaleTimeString();
        setCurrentTime(time);
        if(hr<12){
            setMsg("Good morning")
        }
        else if(hr<18){
            setMsg("Good afternoon")
        }
        else{
            setMsg("Good Evening")
        }
    }
    setInterval(updateTime,1000)
    return(
        <div>
            <h1>Time:{time}</h1>
            <h1>{msg}</h1>
        </div>
    )
}
export default Clock;