// components/meds/TodoList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMeds } from '../../actions/meds';

class MedList extends Component {
  componentDidMount() {
    this.props.getMeds();
  }

  render() {
      console.log(this.props.meds);
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.meds.map(med => (
          <div className='item' key={med.id}>
            <div className='content'>
              <a className='header'>{med.name}</a>
              <a className='header'>{med.avg_dosage}</a>
              <a className='header'>{med.category}</a>
              <div className='description'>{med.created_at}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meds: Object.values(state.meds)
});

export default connect(
  mapStateToProps,
  { getMeds }
)(MedList);