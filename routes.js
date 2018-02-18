import React from 'react';
import {IndexRoute, Router, Route, hashHisorty} from 'react-router';
import Home from './Home';
import App from './App';


export default (
<Router history={hashHisorty}>
  <Route path="/" component = {App}>
    <IndexRoute component={Home}/>
  </Route>
</Router>
);
