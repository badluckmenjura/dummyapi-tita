import React from 'react';
import { Login } from './features/login/Login';
import { Feed } from './features/feed/Feed';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './stylus/style.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Feed">
          <Feed />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
