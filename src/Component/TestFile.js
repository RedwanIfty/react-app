import axiosConfig from './axiosConfig';
import axios from 'axios';
import {useState} from 'react';
const TestFile=()=>{
    const[mFile,setFile] = useState(null);
    const uploadFile=(event)=>{
        event.preventDefault();
        var data = new FormData();
        //if(mFile)data.append('file',mFile,mFile.name);
        axiosConfig.post("file",data).then((rs)=>{
            debugger;
        },(er)=>{
            debugger;
        });


    }
    return(
        <form onSubmit={uploadFile}>
            <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} />
            <input type="submit" />
        </form>
    )
}
export default TestFile;