import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
const View=()=>{
    const[create,setCreate] = useState([]);
    useEffect(()=>{
        axiosConfig.get("file").then((rsp)=>{
        setCreate(rsp.data);
        },(er)=>{

        })

    },[]);
   
    return(
        <div>
            <ol>
                {
                    create.map((st)=>
                    <div key={st.id}>
                    <li>{st.name}</li>
                    <>{st.address}</>
                    <Link to={`/file/delete/${st.id}`}>delete</Link>
                    <img src={`http://localhost:8000/storage/pro_pics/${st.pro_pic}`} width={100} height={100}/>
                    </div>
                    )
                }
            </ol>
        </div>
    )
}
export default View;