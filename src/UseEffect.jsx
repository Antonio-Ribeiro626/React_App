// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//                The state of a value change

// useEffect(function, [dependecies])


// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 2. useEffect(() => {}, [value])  // Runs on mount + when value changes

//USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from a API
// #5 Clean up when a component unmounts



import { useState, useEffect } from 'react'
function UseEffect(){

  const [count, setCount] = useState(0)
  const [color, setColor] = useState("green")

  useEffect(() => {
    document.title = `count: ${count} ${color}`
  }, [count, color])

  function addCount(){
    setCount(c => c + 1)
  }
  function SubtractCount(){
    setCount(c => c - 1)
  }

  function changeColor (){
      setColor(c => c === "green" ? "red" : "green")
  }


  return (
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={SubtractCount}>Subtract</button> <br/>
        <button onClick={changeColor}>Change color</button>
        
        
        </>
        
        
      )


}

export default UseEffect