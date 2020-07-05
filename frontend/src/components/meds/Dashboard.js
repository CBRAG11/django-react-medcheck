// components/todos/Dashboard.js

import React, { Component } from 'react';
import MedList from './MedList';
import MedCreate from './MedCreate'; // added

class Dashboard extends Component {
    render() {
        return (
            <div className='ui container'>
            <div>Med Create Form</div>
            <MedCreate />
            <MedList />
            </div>
        );
    }
}

export default Dashboard;