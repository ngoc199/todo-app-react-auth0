import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import store from "./app/store"
import { Provider } from "react-redux"
import { Auth0Provider } from "./contexts/auth0-context"

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
