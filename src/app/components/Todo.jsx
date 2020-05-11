import React from "react"
import PropTypes from "prop-types"
import "./Todo.css"

const Todo = ({ onClick, text, completed }) => (
  <li className={completed ? "todo completed" : "todo"} onClick={onClick}>
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default Todo
