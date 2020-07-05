// reducers/todos.js

import _ from 'lodash';
import { GET_MEDS, GET_MED, ADD_MED, DELETE_MED } from '../actions/types'; // added ADD_MED

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MED:
    case GET_MEDS:
    return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
    };
    case ADD_MED: // added
    return {
        ...state,
        [action.payload.id]: action.payload
    };
    case DELETE_MED: // added
      return _.omit(state, action.payload)
    default:
      return state;
  }
};