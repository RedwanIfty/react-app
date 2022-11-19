import { useState } from "react";
import Nav from "./Nav";
import axiosConfig from "./axiosConfig";

const Home=()=>{

	const[category,setCategory]=useState("");
	const[to,setTo]=useState("");
	const[ammount,setAmount]=useState("");
	const[msg,setMsg]=useState("");
	const [data,setData]=useState([]);
	const[errs,setErrs]=useState({});
    
	//const[transferred,setTransferred]=useState("")
	const handleSubmit=(event)=>{
        event.preventDefault();
        const data={category:category,to:to,ammount:ammount};
        axiosConfig.post('/home',data).
        then((succ)=>{
           // debugger
            setMsg(succ.data.msg);
           // window.location.href="/list";
        },(err)=>{
           // debugger;
            setErrs(err.response.data);
        })    
    }
    return(
        <div  style={{textAlign:"center"}}>
            <h1>Page 1[Home]</h1>
	        <h2>Digital Waller</h2>
            <Nav/>	
	        <h3>Fund Transfer:</h3>
            <form onSubmit={handleSubmit}>
		<b>Select Category:</b>
		<select name="Category" id="Category" onChange={(e)=>setCategory(e.target.value)}> <span>{errs.category? errs.category[0]:''}</span>
			<option value=" ">Select a value</option>
			<option value="Pay money">Pay Money</option>
			<option value="Recharge">Recharge</option>
			<option value="Pay Bill">Pay Bill</option>
		</select>
		<br/><br/>
		<b>To:</b>
		<input type="text" name="to" onChange={(e)=>setTo(e.target.value)}/><span>{errs.to? errs.to[0]:''}</span>
		<br/><br/>
		<b>Ammount:</b>
		<input type="number" name="ammount" onChange={(e)=>setAmount(e.target.value)}/> <span>{errs.ammount? errs.ammount[0]:''}</span>
		<br/><br/>
		{/* <b>Transferred On:</b>
		<input type="datetime-local" onChange={(e)=>setTransferred(e.target.value)}/>
		<br/><br/> */}
		<input type="submit" name="submit"/>
		<br/><br/>
		{/* {transferred} */}
		
	</form>
	{msg}
        </div>
    )   
}
export default Home;