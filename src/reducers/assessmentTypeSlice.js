import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AssessmentTypeState {
    assessmentType: string
}

export interface AssessmentTypePayload {
    assessmentType?: string
}

export const initialState: AssessmentTypeState = {
        assessmentType: 'assessment'
}

export const assessmentTypeSlice = createSlice({
    name: 'assessmentType',
    initialState,
    reducers: {
        setAssessmentType: (state: AssessmentType, action: PayloadAction<AssessmentType>) =>
            ({ ...state, ...action.payload })
    }
});

export const { setAssessmentType } = assessmentTypeSlice.actions;
export default assessmentTypeSlice.reducer;