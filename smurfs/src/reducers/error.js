import {
  SMURF_FETCH_FAILURE,
  SMURF_ADD_FAILURE,
  SMURF_UPDATE_FAILURE,
  SMURF_DELETE_FAILURE
} from '../actions';

export default (state, { type, payload }) => {
  switch (type) {
    case SMURF_FETCH_FAILURE:
    case SMURF_ADD_FAILURE:
    case SMURF_UPDATE_FAILURE:
    case SMURF_DELETE_FAILURE:
      return payload;
    default:
      return '';
  }
};
