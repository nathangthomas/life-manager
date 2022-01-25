import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HealthHistoryState {
  diagnosis: string,
  hospitalizations: string,
  healthHabits: string
}

export interface HealthHistoryPayload {
  diagnosis?: string,
  hospitalizations?: string,
  healthHabits?: string
}

export const initialState: HealthHistoryState = {
  diagnosis: '',
  hospitalizations: '',
  healthHabits: ''
}

export const healthHistorySlice = createSlice({
  name: 'healthHistory',
  initialState,
  reducers: {
    setHealthHistory: (state: HealthHistoryState, action: PayloadAction<HealthHistoryPayload>) =>
      ({ ...state, ...action.payload })
  }
});

export const { setHealthHistory } = healthHistorySlice.actions;
export default healthHistorySlice.reducer;
