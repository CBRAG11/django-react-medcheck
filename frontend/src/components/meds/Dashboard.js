// components/todos/Dashboard.js

import React, { Component } from 'react';
import MedList from './MedList';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Med Create Form</div>
        <MedList />
      </div>
    );
  }
}

export default Dashboard;