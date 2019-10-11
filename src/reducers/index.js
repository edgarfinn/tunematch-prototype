import { combineReducers } from 'redux';
import tracks from './tracksList';
import selectedTrack from './selectedTrack';

const rootReducer = combineReducers({
  tracks,
  selectedTrack,
});

export default rootReducer;
