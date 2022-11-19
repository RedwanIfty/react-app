import MenuItem from './MenuItem';
//import '../App.css'
const Nav=()=>{
    return (
        <div >
            1.<MenuItem url="/home" value="Home"/>
            2.<MenuItem url="/add-beneficiary" value="Add Beneficiary"/>
            3.<MenuItem url="/transaction-history" value="Transaction History"/>
        </div>
    )
}
export default Nav;