// reducers/todos.js

import _ from 'lodash';
import { GET_MEDS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MEDS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};