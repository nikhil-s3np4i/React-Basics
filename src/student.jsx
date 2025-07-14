import React from 'react'
import PropTypes from 'prop-types'

// Props => props are the way to pass data from one component
function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

// PropTypes

Student.prototypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

// defaultProps = default values for props in case they are not passed from the parent component
//  name: "Guest"
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student