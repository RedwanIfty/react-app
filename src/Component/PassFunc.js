import User from './User'
const PassFunc=()=>{
    const clickFunc=()=>{
        <h1>clicked</h1>
        console.log("clicked")
        alert("Hello from app component")
    }
    return(
    <div>
        <User data={clickFunc} />
    </div>
    )
}
export default PassFunc;