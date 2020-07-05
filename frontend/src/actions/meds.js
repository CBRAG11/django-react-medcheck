// actions/todos.js

import axios from 'axios';
import history from '../history'; // added
import { reset } from 'redux-form'; // added
import { GET_MEDS, GET_MED, ADD_MED, DELETE_MED } from './types'; // added ADD_MED

// GET TODOS
export const getMeds = () => async dispatch => {
  const res = await axios.get('/api/meds/');
  console.log(res.data);
  dispatch({
    type: GET_MEDS,
    payload: res.data
  });
};

// ADD Med
export const addMed = formValues => async dispatch => {
    const res = await axios.post('/api/meds/', { ...formValues });
    dispatch({
        type: ADD_MED,
        payload: res.data
    });
    dispatch(reset('medForm'));
};

// GET TODO
export const getMed = id => async dispatch => { // added
    const res = await axios.get(`/api/meds/${id}/`);
    dispatch({
        type: GET_MED,
        payload: res.data
    });
};
  
// DELETE TODO
export const deleteMed = id => async dispatch => { // added
    await axios.delete(`/api/meds/${id}/`);
    dispatch({
      type: DELETE_MED,
      payload: id
    });
    history.push('/');
};