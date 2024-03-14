import PropTypes from 'prop-types'
function Button(props){
  
  const HandleClick = (e) => e.target.innerText ="uau"
 // const HandleClick2 = (name) => console.log(`${name} stop clicking me`)

  return(
      <button onClick={(e) => HandleClick(e)} className="button">{props.name}</button>
  )

}

Button.propTypes = {

  name: PropTypes.string,

}


export default Button