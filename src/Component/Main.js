import FileUpload from "./FileUpload";
import View from "./View";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Delete from "./Delete";
import TestFile from "./TestFile";
import Form from "./Form";
import LeftMenu from "./LeftMenu";
import Dash from "./Dash";
import Logout from "./Logout";
import Home from "./Home";
import AddBeneficiary from "./AddBeneficiary";
import TansactionHistory from "./TransactionHistory";
import Nav from "./Nav";
import Background from "./Background";
import Child from "./Child";
import Clock from "./Clock";
const Main=()=>{
    // var ch=localStorage.getItem('_authToken');
    console.log(localStorage.getItem('_authToken'))
    return(
        <div> 
            {/* <LeftMenu/>           
            <StudentDepartment/>
            <PassFunc/> */}
            <BrowserRouter>
            {/* //<Background/> */}
            {/* <TestFile/> */}
            {/* <Form/> */}
            {/* {localStorage.getItem('user') ? <Dash/>: <LeftMenu />}
            <FileUpload/> */}
            {/* <View/> */}
            <Clock/>
                <Routes>
                {/* <Route path="/" element={<Form/>}/>
                    <Route path="/file/delete/:id" element={<Delete/>} />
                    <Route path="view/file" element={<View/>}/>
                    <Route path="/logout" element={<Logout/>}/> */}
                    <Route path="/" element={<Nav/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/add-beneficiary" element={<AddBeneficiary/>}/>
                    <Route path="/transaction-history" element={<TansactionHistory/>}/>
                    <Route path="/delete/:id" element={<Delete/>}/>
                </Routes>
            </BrowserRouter> 
        </div>
    );
}
export default Main