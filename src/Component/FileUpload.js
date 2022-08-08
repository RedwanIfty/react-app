import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
const FileUpload=()=>{
    const[mfile,setFile] = useState(null);
    const [name,setName] = useState("");
    const [errs,setErrs] = useState({});
    const [address,setAddress] = useState("");
    const upload=(event)=>{
        event.preventDefault();
        var data = new FormData();
        data.append("file",mfile,mfile.name);
        data.append("name",name);
        data.append('address',address);
        //debugger;
        axiosConfig.post("file",data).then((rsp)=>{
            //debugger;
            setErrs(rsp.data.errs);
        },(er)=>{
            //debugger;4
            console.log(er.response.data);
            setErrs(er.response.data);
        });
        alert("clicked");
    }
    return(
        <div>
            <form onSubmit={upload}>
                <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} name="image"></input><br/><span>{errs.files? errs.files[0]:''}</span><br/>

                Name:<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name='name'/><span>{errs.name? errs.name[0]:''}</span><br/>
                Address:<input value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" name='address'/><span>{errs.address? errs.address[0]:''}</span><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default FileUpload;