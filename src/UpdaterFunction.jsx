// Updater function = is a function passed as an argument to
//                    setState() usually ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import { useState } from 'react'
function UpdaterFunction(){
    const [count, setCount] = useState(0)

    //React Uses the current state to calculate the NEXT state.
    //set functions do not trigger an update
    //React batches together state updates for performance reasons.
    //NEXT state becomes the current state after an update.

  function increment(){

    // Takes the pending state to calculate NEXT state.
    // React puts your updater function in a queue (waiting in line).
    // During the next render, it will call them in the same order.

    setCount(c => c + 1)
    setCount(c => c + 1)
    setCount(c => c + 1)
  }
  function decrement(){
    setCount(c => c -  1)
    setCount(c => c -  1)
    setCount(c => c -  1)
  }
  function reset(){
    setCount(0)
  }


  return(
    <>
    <h1>count: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )

}

export default UpdaterFunction