import PropTypes from 'prop-types'
function UserGreeting(props){

 /* if(props.isLoggedIn){
    return <h2>Welcome  {props.UserName}</h2>
  }
  else{
    return <h2>You Need To Log In </h2>
  }*/

  const welcomeMessage = <h2 className='welcome-message'>
                          Welcome {props.UserName}
                          </h2>

  const loginPrompt =  <h2 className='login-prompt'>
                        Please Log In to continue
                        </h2>

  return(props.isLoggedIn ? welcomeMessage : loginPrompt)


}


export default UserGreeting

UserGreeting.proptypes ={
  isLoggedIn: PropTypes.bool,
  UserName: PropTypes.string,
}

UserGreeting.defaultProps ={
  isLoggedIn: false,
  UserName: "Guest",


}


//Conditional rendering = allows you to control what gets rendered in your application based on certain conditions 
//    (show, hide, or change components)

