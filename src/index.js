import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { AuthProvider } from "react-auth-kit"

ReactDOM.render(
  <AuthProvider authType={"localstorage"} authName={"_auth"}>
    <App />
  </AuthProvider>,
  document.getElementById("root")
)

reportWebVitals()
