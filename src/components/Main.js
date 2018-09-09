import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './contact'
import Gallery from './gallery'
import Team from './team'
import Events from './events'
import Jobs from './jobs'
import Blog from './blog'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/gallery' component={Gallery}/>
      <Route path='/team' component={Team}/>
      <Route path='/events' component={Events}/>
      <Route path='/jobs' component={Jobs}/>
      <Route path='/blog' component={Blog}/>
    </Switch>
  </main>
)

export default Main
