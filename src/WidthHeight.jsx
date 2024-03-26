import  {useState, useEffect} from 'react'

function WidthHeight(){

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight ] = useState(window.innerHeight)

  useEffect(() => {
          window.addEventListener("resize", handleResize)
  console.log("Event Added")
          return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event removed")
          }
  }, [])

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [width, height])



  function handleResize(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <>
        <p>window Width: {width}px</p>
        <p>window Height: {height}px</p>
    
    
    </>
  )


}

export default WidthHeight