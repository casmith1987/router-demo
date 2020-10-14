import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'

class Main extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div id='app'>
        <nav>
          <NavLink to='/' activeClassName='selected'>Home Page</NavLink>
          <NavLink to='/about' activeClassName='selected'>About Page</NavLink>
          <NavLink to='/asdf' activeClassName='selected'>404</NavLink>
        </nav>
        <main>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/' exact component={NotFound}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default Main
