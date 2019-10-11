import { combineReducers } from 'redux';
import tracksList from './tracksList';
import selectedTrack from './selectedTrack';

const rootReducer = combineReducers({
  tracksList,
  selectedTrack,
});

export default rootReducer;
