import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import App from './components/App';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quote" component={Quote} />
      <Route exact path="/calculator" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
