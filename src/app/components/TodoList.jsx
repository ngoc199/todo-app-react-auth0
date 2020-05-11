import React from "react"
import PropTypes from "prop-types"
import Todo from "./Todo"
import "./TodoList.css"

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo
        key={index}
        onClick={() => onTodoClick(index)}
        text={todo.text}
        completed={todo.completed}
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList
