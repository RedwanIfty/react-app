import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
const FileUpload=()=>{
    const[mfile,setFile] = useState(null);
    const [name,setName] = useState("");
    const [errs,setErrs] = useState({});
    const [address,setAddress] = useState("");
    const upload=(event)=>{
        debugger;
        event.preventDefault();
        var data = new FormData();
        if(mfile)data.append("file",mfile,mfile.name);
        data.append("name",name);
        data.append('address',address);
        // //debugger;
        axiosConfig.post("file",data).then((rsp)=>{
           // debugger;
            //setErrs(rsp.data.errs);
        },(er)=>{
            debugger;
            //console.log(er.response.data);
            setErrs(er.response.data);
        });
        debugger;
        //alert("clicked");
    }
    return(
        <div>
            <form onSubmit={upload}>
                <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} ></input><br/><span>{errs.files? errs.file[0]:''}</span><br/>
                Name:<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name='name'/><span>{errs.name? errs.name[0]:''}</span><br/>
                Address:<input value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" name='address'/><span>{errs.address? errs.address[0]:''}</span><br/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}
export default FileUpload;