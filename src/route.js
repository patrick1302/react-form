import React from 'react';
import Login from './login';
import Form from './form';
import Logged from './logged';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Routes() {
  return (
    <div>
      <BrowserRouter>

        <Switch>
          <Route exact path='/' component={Form} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logged' component={Logged} />
        </Switch>
      </BrowserRouter>
    </div>
  )

}

export default Routes;
