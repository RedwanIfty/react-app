import Nav from "./Nav";
import axiosConfig from "./axiosConfig";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const AddBeneficiary=()=>{
	const[name,setName]=useState("");
	const[phone_no,setPhone_no]=useState("");
	const[msg,setMsg]=useState("");
	const [data,setData]=useState([]);
	const[errs,setErrs]=useState({});
	useEffect(()=>{
        axiosConfig.get('add-beneficiary').then((rsp)=>{
		debugger	
        setData(rsp.data);
        console.log(rsp.data);
        },(er)=>{

        })

    },[]); 
	const upload=(event)=>{
		event.preventDefault();
		const data={name:name,phone_no:phone_no}
		axiosConfig.post('add-beneficiary',data).then(
			(succ)=>{
				setMsg(succ.data.msg);
			},
			(er)=>{
				setErrs(er.response.data)
			}
		)
		axiosConfig.get('add-beneficiary').then((rsp)=>{
			debugger	
			setData(rsp.data);
			console.log(rsp.data);
			},(er)=>{
	
			})
	}
    return(
        <div>
			<h1>Page 2[Add Beneficiary]</h1>
	        <h2>Digital Waller</h2>
            <Nav/>
            <h3>Add Beneficiary:</h3>
            <form onSubmit={upload}>
				Beneficiary Name:
				<input type="text" onChange={(e)=>setName(e.target.value)}/><span>{errs.name ? errs.name[0] : ''}</span>
				<br/><br/>
				Mobile :
				<input type="number" name="mobile" onChange={(e)=>setPhone_no(e.target.value)}/><span>{errs.phone_no ? errs.phone_no[0] : ''}</span>
				<br/><br/>
				<input type="submit" name="submit"/><br/><br/>	<br/><br/>
			</form>
			{/* {msg} */}
			<table border={1}>
				<thead>
					<tr>
						<th>Beneficiary Name</th>
						<th>Phone number</th>
						<th>Action</th>
					</tr>	
				</thead>
				<tbody>
					{
						data.map(d=>(
							<tr key={d.id}>
								<td>{d.name}</td>
								<td>{d.phone_no}</td>
								<td><Link to={`/delete/${d.id}`}>delete</Link></td>
							</tr>
						))
					}
				</tbody>
			</table>
        </div>
    )   
}
export default AddBeneficiary;