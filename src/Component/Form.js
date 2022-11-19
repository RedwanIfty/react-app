import {useState} from 'react';
import axiosConfig from './axiosConfig';
import User from './User';
import UserDash from './UserDash';
const Form =()=>{
    const[uname,setUname] = useState("");
    const[pass,setPass] = useState("");
    const[errs,setErrs]=useState({});
    const handleForm=(event)=>{
        event.preventDefault();
        var data={uname:uname,pass:pass};
        debugger
        axiosConfig.post('login',data).then(
            (succ)=>{
                localStorage.setItem('user',succ.data.tkey);
                debugger
                if(succ.data.Role==='Admin')
                   { window.location.href="/view/file";}
                if(succ.data.Role==='User')
                    {alert('user cannot access')}
                
            },
            (err)=>{
                setErrs(err.response.data);
            }
        )

    }
    return (
        <div>
            <form onSubmit={handleForm}>
                Username:<input value={uname} onChange={(e)=>{setUname(e.target.value)}} type="text"/><br/><spna>{errs.uname ? errs.uname[0] : " "}</spna><br/>
                Password: <input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password"/> <br/><spna>{errs.pass ? errs.pass[0] : " "}</spna><br/>
                <input type="submit" value="login"/>
            </form>
            
        </div>
    )
}
export default Form;