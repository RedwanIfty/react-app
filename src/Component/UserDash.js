import React,{useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
const UserDash=()=>{
    const[create,setCreate] = useState([]);
    const componentRef=useRef();
    //debugger;
    const handlePrint=useReactToPrint({
        content:() =>componentRef.current,
        documentTitle:'data',
        onAfterPrint:()=>alert("print")
    });
    useEffect(()=>{
        axiosConfig.get("file").then((rsp)=>{
            debugger;
        setCreate(rsp.data);
        console.log(rsp.data);
        },(er)=>{

        })

    },[]);
   
    return(
        <div>
            <table border="1"><tr><th>Hello</th></tr><tr><td>Hello IFTY</td></tr></table>
        <div ref={componentRef} style={{width:'100%',height:window.innerHeight}}>
            <ol>
                {
                    create.map((st)=>
                    <div key={st.id}>
                    <li>{st.name}</li>
                    <>{st.address}</>
                    <img src={`http://localhost:8000/storage/pro_pics/${st.pro_pic}`} width={100} height={100}/>
                    </div>
                    )
                }
            </ol>
        </div>
        <button onClick={handlePrint}>print</button>
        </div>
    )
}
export default UserDash;