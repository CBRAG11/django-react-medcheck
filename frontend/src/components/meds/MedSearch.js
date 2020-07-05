// // components/meds/MedCreate.js

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addMed } from '../../actions/meds';
// import MedForm from './MedForm';

// class MedCreate extends Component {
//   onSubmit = formValues => {
//     this.props.addMed(formValues);
//   };

//   render() {
//     return (
//       <div style={{ marginTop: '2rem' }}>
//         <MedForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   { addMed }
// )(MedCreate);