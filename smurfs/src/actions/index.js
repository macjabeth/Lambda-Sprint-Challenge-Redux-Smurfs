import axios from 'axios';

export const SMURF_FETCH_START = 'SMURF_FETCH_START';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';
export const SMURF_FETCH_FAILURE = 'SMURF_FETCH_FAILURE';
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: SMURF_FETCH_START });
  axios
    .get('/smurfs')
    .then(({ data }) => dispatch({ type: SMURF_FETCH_SUCCESS, data }))
    .catch(err => dispatch({ type: SMURF_FETCH_FAILURE, err }));
};

export const SMURF_ADD_START = 'SMURF_ADD_START';
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';
export const SMURF_ADD_FAILURE = 'SMURF_ADD_FAILURE';
export const addSmurf = frenn => dispatch => {
  dispatch({ type: SMURF_ADD_START });
  axios
    .post('/smurfs', frenn)
    .then(({ data }) => dispatch({ type: SMURF_ADD_SUCCESS, data }))
    .catch(err => dispatch({ type: SMURF_ADD_FAILURE, err }));
};

export const SMURF_UPDATE_START = 'SMURF_UPDATE_START';
export const SMURF_UPDATE_SUCCESS = 'SMURF_UPDATE_SUCCESS';
export const SMURF_UPDATE_FAILURE = 'SMURF_UPDATE_FAILURE';
export const updateSmurf = (id, frenn) => dispatch => {
  dispatch({ type: SMURF_UPDATE_START });
  axios
    .post(`/smurfs/${id}`, frenn)
    .then(({ data }) => dispatch({ type: SMURF_UPDATE_SUCCESS, data }))
    .catch(err => dispatch({ type: SMURF_UPDATE_FAILURE, err }));
};

export const SMURF_DELETE_START = 'SMURF_DELETE_START';
export const SMURF_DELETE_SUCCESS = 'SMURF_DELETE_SUCCESS';
export const SMURF_DELETE_FAILURE = 'SMURF_DELETE_FAILURE';
export const deleteSmurf = id => dispatch => {
  dispatch({ type: SMURF_DELETE_START });
  axios
    .post(`/smurfs/${id}`)
    .then(({ data }) => dispatch({ type: SMURF_DELETE_SUCCESS, data }))
    .catch(err => dispatch({ type: SMURF_DELETE_FAILURE, err }));
};
