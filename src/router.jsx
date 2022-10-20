import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './helpers/history';
import LayoutBase from './layout/layout';

import Home from './modules/home/home'
import Posts from './modules/posts/posts'
import Post from './modules/posts/post'

const PublicRoute = ({ component: Component, path }) => {
  return (
    <Route
      exact
      path={path}
      render={props =>
        <LayoutBase>
          <Component {...props} />
        </LayoutBase>
      }
    />
  )
}

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/posts' component={Posts} />
        <PublicRoute exact path='/posts/:idPost' component={Post} />
      </Switch>
    </Router>
  )
}
