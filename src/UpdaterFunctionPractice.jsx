import { useState } from 'react'
function UpdaterFunctionPractice(){

  const [car, setCar] = useState({year: 2022, 
                                  make:"Buggati", 
                                  model:"Chiron"})

  // Spread Operator ...Object

  function handleYearChange(e){
    setCar(c => ({...c, year: e.target.value}))
  }
  function handleMakeChange(e){
    setCar(c => ({...c , make: e.target.value}))
  }
  function handleModelChange(e){
    setCar(c => ({...c, model: e.target.value}))
  }

  return(
        <div>
          <p>Your Favorite car is: {car.year} {car.make} {car.model}</p>
          <input type="number" value={car.year} onChange={handleYearChange}/> <br />
          <input type="text" value={car.make} onChange={handleMakeChange}/> <br />
          <input type="text"  value={car.model} onChange={handleModelChange}/>
        </div>
  )


}

export default UpdaterFunctionPractice