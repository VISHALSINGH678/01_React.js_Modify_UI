import { useState } from "react";

function Chai (){
    let [counter, setCounter] = useState(5)
    const addValue = () =>{
        setCounter(counter + 1)
    }
    const removeValue = () =>{
        setCounter(counter -1)
    }
    return(
        <>
        <h1>Hi, Guys chai pi lo.</h1>
        <h2>Counter value: {counter}</h2>
        
        <button onClick={addValue}>Add value</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove value</button>
        </>
    )
}
export default Chai;