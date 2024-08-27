import { useState } from "react"

const Both = () => {
    const[value, setValue] = useState(0)

    const Add = () =>{
        setValue(value + 1)
    }
    const Minus = () =>{
        setValue(value - 1)
    }
    return(
        <div>
            <h1>Addition and Minus {value}</h1>
            <button onClick={Add}>Add</button>
            <button onClick={Minus}>Minus</button>
        </div>
    )
}
export default Both;