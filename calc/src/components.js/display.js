import { useState, useEffect } from "react";

const Display = (props) =>{

    return(
        <div>
            <h1>{props.displayNum1}  {props.displayEqu} {props.displayNum2}</h1>
        </div>
    )

}

export default Display