import { SET_ASSESSMENT_TYPE_ACTION } from './actionTypes';

export const setAssessmentTypeAction = assessmentType => ({
    type: SET_ASSESSMENT_TYPE_ACTION,
    assessmentType,
});