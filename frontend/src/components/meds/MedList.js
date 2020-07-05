// components/meds/MedList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // added
import { getMeds, deleteMed } from '../../actions/meds';


class MedList extends Component {
  componentDidMount() {
    this.props.getMeds();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.meds.map(med => (
          <div className='item' key={med.id}>
            <div className='right floated content' key={med.name}>
              <Link
                to={`/delete/${med.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <div className='content'>
              <a className='header'>{med.name}</a>
              <div className='description'>{med.category}</div>
              <div className='description'>{med.avg_dosage}</div>
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
  { getMeds, deleteMed }
)(MedList);