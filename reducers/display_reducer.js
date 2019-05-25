import { DISPLAY_SELECT } from '../actions/types';

const INITIAL_STATE = 'Slider';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_SELECT:
      return action.payload;
    default:
      return state;
  }
};
