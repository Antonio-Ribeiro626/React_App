import { useState } from "react"

function Counter (){
  const [count, setCount] = useState(0)

  
  const increment = () =>{
    setCount(count + 1)

  }


  const deincrement = () =>{
    setCount(count - 1)
  }
  const reset = () =>{
    setCount(0)
  }

  return(
    <div className="Counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={deincrement}>-</button>
       <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  )

}


export default Counter