import { SET_HEALTH_HISTORY_ACTION } from '../actions/actionTypes';

const initialState = {
    diagnosis: '',
    hospitalizations: '',
    healthHabits: '',
};

export default function healthHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_HEALTH_HISTORY_ACTION:
            return {
                ...state,
                ...action.history,
            };
        default:
            return state;
    }
}