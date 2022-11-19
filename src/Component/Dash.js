import MenuItem from './MenuItem';
import '../App.css'
const Dash=()=>{
    return (
        <div >
            <MenuItem url="/view/file" value="Dash"/>
            <MenuItem url="/logout" value="Logout"/>
            
        </div>
    )
}
export default Dash;