import React from 'react'
import {useState} from 'react'

function Button(props){
    const [count, setCount] = useState(0)
    
    return(
        <div>
            
                Number of {props.label}: {count}
            
            <button onClick={()=> setCount(count + 1)}>
                ${props.value}<br></br>
            
            </button>
        </div>
    )
}
export default Button