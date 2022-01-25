import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import healthHistoryReducer from './healthHistorySlice';
import assessmentTypeReducer from './assessmentTypeSlice';
import praPlusReducer from './praPlusSlice';
import promisReducer from './promisSlice';

const rootReducer = history =>
  combineReducers({
    promis: promisReducer,
    praPlus: praPlusReducer,
    assessmentType: assessmentTypeReducer,
    healthHistory: healthHistoryReducer,
    router: connectRouter(history),
  });

export default rootReducer;
