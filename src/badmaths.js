import React from 'react'
import Button from './button'
import {useState} from 'react'

function Total(){
    const [pennies, setPennies] = useState(0)
    const [nickles, setNickles] = useState(0)
    const [dimes, setDimes] = useState(0)
    const [quarter, setQuarter] = useState(0)

    const total = (pennies * 0.01) + (nickles * 0.05) + (dimes * 0.10)+ (quarter * 0.25)
    return(
        <div>
            Total: {total.toFixed(2)}
            
            <div>
                Number of pennies: {pennies}
                <button onClick={()=> setPennies(pennies + 1)}>
                    $.01<br></br>
                </button>
            </div>
            <div>
                Number of nickles: {nickles}
                <button onClick={()=> setNickles(nickles + 1)}>
                    $.05<br></br>
                </button>
            </div>
            <div>
                Number of dimes: {dimes}
                <button onClick={()=> setDimes(dimes + 1)}>
                    $.10<br></br>
                </button>
            </div>
            <div>
                Number of quarter : {quarter}
                <button onClick={()=> setQuarter(quarter  + 1)}>
                    $.25<br></br>
                </button>
            </div>

            
            {/* <Button label = "Pennies" value = {.01}/>
            <Button label = "Nickles" value = {.05} />
            <Button label = "Dimes" value = {.10} />
            <Button label = "Quarters" value = {.25} /> */}
        </div>
    )

}

export default Total