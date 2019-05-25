import { combineReducers } from 'redux';
import display from './display_reducer';
import media from './media_reducer';


export default combineReducers({
  display,
  media
});
