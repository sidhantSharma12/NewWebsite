import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/home';
import Resume from './components/resume';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/resume" component={Resume} />
  </Router>
);

export default Routes;
