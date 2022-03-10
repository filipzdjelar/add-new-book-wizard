import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import dataReducer from './dataReducer';

const reducers = combineReducers({
  main: mainReducer,
  data: dataReducer,
});

export default reducers;
