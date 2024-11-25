import PropTypes from 'prop-types'



function Student(props){
return(
    <div className="student-card">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
)
}

//Type of the props, you cant use a another type
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

//Default value of the props, if you dont add the value in the App.jsx
Student.defaultProps = {
    name: "Guest",
    age: 1,
    isStudent: false
}

export default Student