import React, { Component } from 'react';
import './App.css';
import Create from './pages/Crtapp';
import Cancel from './pages/Cnclapp';
import Change from './pages/Chgapp';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Create} />
          <Route path="/change" component={Change} />
          <Route path="/cancel" component={Cancel} />
        </Switch>
      </div>
    );
  }
}

export default App;
