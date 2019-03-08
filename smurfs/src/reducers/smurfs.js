import {
  SMURF_FETCH_SUCCESS,
  SMURF_ADD_SUCCESS,
  SMURF_UPDATE_SUCCESS,
  SMURF_DELETE_SUCCESS
} from '../actions';

export default (state = [], { type, data }) => {
  switch (type) {
    case SMURF_FETCH_SUCCESS:
    case SMURF_ADD_SUCCESS:
    case SMURF_UPDATE_SUCCESS:
    case SMURF_DELETE_SUCCESS:
      return data;
    default:
      return state;
  }
};
