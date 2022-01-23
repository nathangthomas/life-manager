import { SET_HEALTH_HISTORY_ACTION } from './actionTypes';

export const setHealthHistoryAction = history => ({
    type: SET_HEALTH_HISTORY_ACTION,
    history,
});