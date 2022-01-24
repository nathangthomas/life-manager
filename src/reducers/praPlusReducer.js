import { SET_PRA_PLUS_ACTION } from '../actions/actionTypes';

const initialState = {
    hospitalizations: '',
    heartDisease: '',
    breathingProblems: false,
    highBloodPressure: false,
    heartProblems: false,
    urinaryProblems: false,
    mentalProblems: false,
    ankleSwelling: false,
    cancer: false,
};

export default function praPlusReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRA_PLUS_ACTION:
            return {
                ...state,
                ...action.praPlus,
            };
        default:
            return state;
    }
}