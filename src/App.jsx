import { useState } from "react";
import "./App.css"

export default function App (){
    let [counter, setCounter] = useState(8)

    const addValue = () =>{
        setCounter(counter + 1)
    }
    const removeValue = () =>{
        setCounter(counter -1)
    }
      
    return(
        <div className="A">
        <h1>Modify UI With Bottons.</h1>
        <h2>Counter value: <p>{counter}</p></h2>
        
        <button onClick={addValue}>+</button>
        <button onClick={removeValue}>-</button>
        
        </div>
    )
}
 App