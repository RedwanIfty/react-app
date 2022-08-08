import MenuItem from './MenuItem';
import '../App.css'
const LeftMenu=()=>{
    return (
        <div className='App-header' >
            <MenuItem name="/aiub" value="Home"/>
            <MenuItem name="/aboutus" value="About Us"/>
            <MenuItem name="/contact" value="Contact Us"/>
            
        </div>
    )
}
export default LeftMenu;