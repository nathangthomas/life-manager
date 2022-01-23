import { SET_ASSESSMENT_TYPE_ACTION } from '../actions/actionTypes';

const initialState = {
    assessmentType: '',
};

export default function assessmentTypeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ASSESSMENT_TYPE_ACTION:
            return {
                ...state,
                ...action.assessmentType,
            };
        default:
            return state;
    }
}