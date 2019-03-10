import {
  SMURF_FETCH_START,
  SMURF_ADD_START,
  SMURF_UPDATE_START,
  SMURF_DELETE_START
} from '../actions';

export default (state, { type, payload }) => {
  switch (type) {
    case SMURF_FETCH_START:
      return 'fetching smurfs';
    case SMURF_ADD_START:
      return 'adding smurf';
    case SMURF_UPDATE_START:
      return 'updating smurf';
    case SMURF_DELETE_START:
      return 'deleting smurf';
    default:
      return 'idle';
  }
};
