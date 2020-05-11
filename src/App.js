import React, { useContext } from "react"
import FilterOptions from "./app/components/FilterOptions"
import AddTodo from "./app/containers/AddTodo"
import VisibleTodoList from "./app/containers/VisibleTodoList"
import { Auth0Context } from "./contexts/auth0-context"

function App() {
  const auth0 = useContext(Auth0Context)

  return (
    <div>
      <AddTodo />
      <FilterOptions />
      <VisibleTodoList />
      <button onClick={auth0.loginWithRedirect}>Login</button>
    </div>
  )
}

export default App
