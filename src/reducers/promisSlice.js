import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PromisState {
  activities: string,
  pain: string,
  health: string
}

export interface PromisPayload {
  activities?: string,
  pain?: string,
  health?: string
}

export const initialState: PromisState = {
  activities: '',
  pain: '',
  health: ''
}

export const promisSlice = createSlice({
  name: 'promis',
  initialState,
  reducers: {
    setPromis: (state: PromisState, action: PayloadAction<PromisPayload>) =>
      ({ ...state, ...action.payload })
    }
});

export const { setPromis } = promisSlice.actions;
export default promisSlice.reducer;
