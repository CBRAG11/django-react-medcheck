// frontend/src/components/App.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './meds/Dashboard'; // added

import { Provider } from 'react-redux'; // added
import store from '../store'; // added

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));