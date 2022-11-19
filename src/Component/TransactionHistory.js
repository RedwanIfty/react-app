import Nav from "./Nav";
import axiosConfig from "./axiosConfig";
import { useState } from "react";
const TansactionHistory=()=>{
    const[from,setFrom]=useState("")
    const[to,setTo]=useState("");    
    const[msg,setMsg]=useState("");
	const [data,setData]=useState([]);
	const[errs,setErrs]=useState({});
    var count=0;
    const handleform=(event)=>{
        event.preventDefault();
        const data={from:from,to:to}
        axiosConfig.post('transaction-history',data).then(
            (rsp)=>{
                setData(rsp.data);
                console.log(rsp.data);
                setMsg(rsp.data.msg)
            },
            (errs)=>{
                setErrs(errs.response.data);
            }
        )
    }
    return(
        <div>
            <h1>Page 3[Transaction History]</h1>
            <h2>Digital Waller</h2>
            <Nav/>
            <h3>Transaction History:</h3>
            <form onSubmit={handleform}>
		    From:
		    <input type="datetime-local" onChange={(e)=>setFrom(e.target.value)}/><span>{errs.from ? errs.from[0] : ''}</span>
		    To:
		    <input type="datetime-local" onChange={(e)=>setTo(e.target.value)}/><span>{errs.to ? errs.to[0] : ''}</span>
		    <input type="submit" name="search" value="Search"/>
            <br/><br/>
            Total Records({localStorage.getItem('count')})
            <table border={1}>
                <thead>
                    <tr>
                        <th>Transaction Catagory</th>
                        <th>To</th>
                        <th>Ammount</th>
                        <th>Transferred On</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d=>(
                            <>
                            <tr key={d.id}>
                                <td>{d.category}</td>
                                <td style={{color:'purple'}}>{d.to}</td>
                                <td>{d.ammount} TK</td>
                                <td >{d.transferred_on}</td>

                            </tr>
                            <p hidden>{count=count+1}</p>
                            </>
                        ))
                    }
                </tbody>
            </table>
            {localStorage.setItem('count',count)}
	</form>
        </div>
    )   
}
export default TansactionHistory;