import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../containers/HomeContainer';
import NotFound from '../screens/NotFound';

const RouterApp = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default RouterApp;