import React, { useState } from "react";

const Background=()=>{
    var [color, setColor] = useState("Red");

    return(
        <div>
            <button type="button" onClick={() => setColor("orange")} >orange</button>
            <button type="button" onClick={() => setColor("green")} >Green</button>
            <button type="button" onClick={() => setColor("yellow")} >Yellow</button>
        </div>
    )
}
export default Background;