import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import 'jquery/src/jquery';
import 'semantic-ui/dist/semantic.min.css';
import 'semantic-ui/dist/semantic.min.js';
import './index.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route render={() => <Redirect to="/"/>}/>
    </Switch>
  </Router>
);

export default App;
