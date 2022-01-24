import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PraPlusState {
    hospitalizations: string,
    heartDisease: string,
    complications: []
}

export interface PraPlusPayload {
    hospitalizations?: string,
    heartDisease?: string,
    complications?: []
}

export const initialState: PraPlusState = {
    hospitalizations: '',
    heartDisease: '',
    complications: []
}

export const praPlusSlice = createSlice({
    name: 'healthHistory',
    initialState,
    reducers: {
        setPraPlus: (state: PraPlusState, action: PayloadAction<PraPlusPayload>) =>
            ({ ...state, ...action.payload })
    }
});

export const { setPraPlus } = praPlusSlice.actions;

export default praPlusSlice.reducer;