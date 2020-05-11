import { createStore } from "redux"
import todoApp from "./reducers/reducer"

const store = createStore(todoApp, window.STATE_FROM_SERVER)

export default store
