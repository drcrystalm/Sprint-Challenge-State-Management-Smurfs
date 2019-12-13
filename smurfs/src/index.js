import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
