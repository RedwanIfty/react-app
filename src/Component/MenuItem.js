const MenuItem=({name,value})=>{
    console.log({name,value});
    return (

        <a href={name}>{value}</a>
    )
}
export default MenuItem;