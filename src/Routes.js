import React from 'react'
import { BrowserRouter,HashRouter,Switch, Route } from 'react-router-dom'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Interest from './components/Interest'
import Home from './components/Home'


function Routes() {
    return (
      <BrowserRouter >
      <Switch>
          <Route path={process.env.PUBLIC_URL+'/'} exact component={Home} />
          <Route path={process.env.PUBLIC_URL+'/education'} component={Education} />
          <Route path={process.env.PUBLIC_URL+"/experience"} component={Experience} />
          <Route path={process.env.PUBLIC_URL+"/skills"} component={Skills} />
          <Route path={process.env.PUBLIC_URL+"/projects"} component={Projects} />
          <Route path={process.env.PUBLIC_URL+"/interest"} component={Interest} />

      </Switch>
      </BrowserRouter>
    )
}

export default Routes
