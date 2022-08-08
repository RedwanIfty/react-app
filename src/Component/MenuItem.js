import { Link } from "react-router-dom";

const MenuItem=({name,value})=>{
    console.log({name,value});
    return (

        <Link to={name}>{value}</Link>
    )
}
export default MenuItem;