import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import healthHistoryReducer from './healthHistoryReducer';
import assessmentTypeReducer from './assessmentTypeReducer';
import praPlusReducer from './praPlusReducer';

const rootReducer = history =>
    combineReducers({
        praPlus: praPlusReducer,
        assessmentType: assessmentTypeReducer,
        healthHistory: healthHistoryReducer,
        router: connectRouter(history),
    });

export default rootReducer;