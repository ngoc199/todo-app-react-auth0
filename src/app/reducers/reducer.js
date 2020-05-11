import visibilityFilter from "./visibilityFilter"
import todos from "./todos"

import { combineReducers } from "redux"

const todoApp = combineReducers({
  visibilityFilter,
  todos,
})

export default todoApp
