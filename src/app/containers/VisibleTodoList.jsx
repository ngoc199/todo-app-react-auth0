import { connect } from "react-redux"
import { toggleTodo, VisibilityFilter } from "../actions"
import TodoList from "../components/TodoList"

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed)
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed)
    case VisibilityFilter.SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
  }
}

const visibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default visibleTodoList
