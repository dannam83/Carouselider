import { FETCH_MEDIA } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MEDIA:
      return action.payload;
    default:
      return state;
  }
};
