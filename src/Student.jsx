import PropTypes from 'prop-types'

function Student(props){
  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.Age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      <p>Present: {props.isHere ? "Yes" : "No"}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  Age: PropTypes.number,
  isStudent: PropTypes.bool,
  isHere: PropTypes.bool,
}

Student.defaultProps = {
  name: "Guest",
  Age: 0,
  isStudent: false,
  isHere: false,
}

export default Student

//Props = read-only  properties that are shared between components.
//A parent component can send data to a child component.
//<Component key=value />

//PropTypes = a mechanism that ensures that the passed value 
//            is of the correct datatype.
//            age: PropTypes.number

// defaultProps = default values for props in case they are not
//                passed from the parent component
//                name: "Guest"