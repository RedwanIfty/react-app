import FileUpload from "./FileUpload";
import View from "./View";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Delete from "./Delete";
import TestFile from "./TestFile";
const Main=()=>{
    
    return(
        <div> 
            {/* <LeftMenu/>           
            <StudentDepartment/>
            <PassFunc/> */}
            <BrowserRouter>
            {/* <TestFile/> */}
            <FileUpload/>
            <View/>
                <Routes>
                    <Route path="/file/delete/:id" element={<Delete/>} />
                </Routes>
            </BrowserRouter> 
        </div>
    );
}
export default Main