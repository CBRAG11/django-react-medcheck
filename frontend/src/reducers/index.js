// reducers/index.js

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import meds from './meds';

export default combineReducers({
  form: formReducer,
  meds
});