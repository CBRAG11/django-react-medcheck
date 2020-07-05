// frontend/src/components/App.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './meds/Dashboard'; // added
import { Provider } from 'react-redux'; // added
import store from '../store'; // added
import Header from './layout/Header'; // added
import { Router, Route, Switch } from 'react-router-dom'; // added
import history from '../history'; // added
import MedDelete from './meds/MedDelete'; // added

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={MedDelete} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));