// components/todos/TodoDelete.js

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../layout/Modal';
import history from '../../history';
import { getMed, deleteMed } from '../../actions/meds';

class MedDelete extends Component {
  componentDidMount() {
    this.props.getMed(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.med) {
      return 'Are you sure you want to delete this task?';
    }
    return `Are you sure you want to delete the task: ${this.props.med.name}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteMed(id)}
          className='ui negative button'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title='Delete Med'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  med: state.meds[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getMed, deleteMed }
)(MedDelete);