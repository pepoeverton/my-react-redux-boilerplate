import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';

const RouterApp = () => (
  <BrowserRouter>
    <Route path="/teste" component={HomeContainer} />
  </BrowserRouter>
);

export default RouterApp;