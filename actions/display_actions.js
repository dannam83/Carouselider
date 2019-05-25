import { DISPLAY_SELECT } from './types';

export const displaySelect = (display) => {
  return ({
    type: DISPLAY_SELECT,
    payload: display
  });
};
