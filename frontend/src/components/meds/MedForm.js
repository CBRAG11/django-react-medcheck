// components/todos/TodoForm.js

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class MedForm extends Component {
  renderField = ({ input, label, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {touched && error && (
          <span className='ui pointing red basic label'>{error}</span>
        )}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
          <Field name='name' component={this.renderField} label='Name' />
          <Field name='avg_dosage' component={this.renderField} label='Dosage' />
          <Field name='category' component={this.renderField} label='Category' />
          <button className='ui primary button'>Add</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (formValues.name == null ) {
    errors.name = 'Please enter at least 1 character';
  }
  else if (formValues.avg_dosage == null) {
    errors.avg_dosage = 'Please enter at least 1 character';
  }
  else if (formValues.category == null) {
    errors.category = 'Please enter at least 1 character';
  }
  return errors;
};

export default reduxForm({
  form: 'medForm',
  touchOnBlur: false,
  validate
})(MedForm);