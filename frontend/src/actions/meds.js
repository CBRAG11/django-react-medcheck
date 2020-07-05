// actions/todos.js

import axios from 'axios';
import { GET_MEDS } from './types';

// GET TODOS
export const getMeds = () => async dispatch => {
  const res = await axios.get('/api/meds/');
  console.log(res.data);
  dispatch({
    type: GET_MEDS,
    payload: res.data
  });
};