import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Home from '../Read/Home'
import EditEmployee from '../Update&Delete/EditEmployee'
import AddEmployee from '../Create/AddEmployee'

export default () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/employee" component={AddEmployee} />
        <Route exact path="/employee/:id" component={EditEmployee} />
      </Switch>
    </div>
  )
}
