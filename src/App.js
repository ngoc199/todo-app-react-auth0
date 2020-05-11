import React from "react"
import FilterOptions from "./app/components/FilterOptions"
import AddTodo from "./app/containers/AddTodo"
import VisibleTodoList from "./app/containers/VisibleTodoList"
import Navbar from "./app/components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <AddTodo />
      <FilterOptions />
      <VisibleTodoList />
    </div>
  )
}

export default App
