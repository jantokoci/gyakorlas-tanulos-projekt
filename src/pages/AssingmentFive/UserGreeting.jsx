import PropTypes from 'prop-types'

function UserGreeting(props) {

const welcomeMessage = <h2 className='welcome-message'>Welcome {props.username}</h2>
const loginPromt = <h2 className='login-prompt'>Please log in to continue</h2>

   return(props.IsLoggedIn ?    welcomeMessage : loginPromt)
   
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    IsLoggedIn: PropTypes.bool
}

UserGreeting.defaultProps = {
    username: "Guest",
    IsLoggedIn: false
}

export default UserGreeting