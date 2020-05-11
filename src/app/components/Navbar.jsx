import React from "react"
import "./Navbar.css"
import { useAuth0 } from "../../contexts/auth0-context"

function Navbar() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0()

  return (
    <nav>
      {!isLoading && !user && (
        <>
          <button onClick={loginWithRedirect}>Login</button>
        </>
      )}
      {!isLoading && user && (
        <>
          <p>Hello {user.name}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </>
      )}
    </nav>
  )
}

export default Navbar
