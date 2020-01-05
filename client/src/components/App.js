import React from "react"
import { useUsers } from "../hooks"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home"

function App() {
  const { users } = useUsers()

  console.log(users)

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
