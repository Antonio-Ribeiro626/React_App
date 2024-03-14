import {useState} from 'react'
function MyComponent(){

  const [name, setName] = useState("Guest")
  const [age , setAge] = useState(0)
  const [isEmployed, setIsEmployed] = useState()



  const ChangeName = () =>{
       setName("Hood")
  }
  const IncrementAge = () =>{
       setAge(age + 1)
  }

  const EmployedStatus = () =>{
    setIsEmployed(!isEmployed)
  }


  return(
    <div className="">
      <p>Name: {name}</p>
      <button onClick={ChangeName}>Set Name</button>
      <p>Age: {age}</p>
       <button onClick={IncrementAge}>Set age</button>

      <p>Is Employed: {isEmployed ? "yes" : "No"}</p>
       <button onClick={EmployedStatus}>Toggle Status</button>
    </div>
  )

}

export default MyComponent


//React hook =  is a Special function that allows functional components to use 
//              React features without writing class components (React v16.8)
//              (useState, UseEffect, useReducer, useCallback, and more...)
//

//useState() =  A React hook that allows he creation of a stateful variable
//              and a setter function to update its value in the virtual DOM
//              [name, setName]


