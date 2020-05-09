import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../../scenes/Sign/Login';
import Register from '../../scenes/Sign/Register';

import Dashboard from '../../scenes/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}
