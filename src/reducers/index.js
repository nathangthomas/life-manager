import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import healthHistoryReducer from './healthHistoryReducer';
import assessmentTypeReducer from './assessmentTypeReducer';

const rootReducer = history =>
    combineReducers({
        assessmentType: assessmentTypeReducer,
        healthHistory: healthHistoryReducer,
        router: connectRouter(history),
    });

export default rootReducer;