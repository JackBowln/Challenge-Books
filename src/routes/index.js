import React, { useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { PrivateRoute } from "react-auth-kit"

import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
const RoutesComponent = () => {

  return (
    <BrowserRouter>
      <Route component={Login} path={"/login"} exact />
      <PrivateRoute component={Home} path={"/"} loginPath={"/login"} exact />
    </BrowserRouter>
  )
}

export default RoutesComponent
