import React from 'react';
import Login from './login';
import Form from './form';
import Logged from './logged';
import {Switch, Route} from 'react-router-dom'

const App = () => (

        <Switch>
          <Route exact path='/' component={Form} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logged' component={Logged} />
        </Switch>
  )


export default App;
