import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './shared/Header';
import { setHealthHistoryAction } from '../actions/healthHistoryActions';

const HealthHistory = () => {
  const dispatch = useDispatch();
  const healthHistory = useSelector(state => state.healthHistory);

  return (
    <div className="HealthHistory">
        <Header title="Health History" />
        <form>
            <legend>Please describe any current diagnosis:</legend>
            <textarea
                name="diagnosis"
                rows="10" cols="50"
//                value={healthHistory.diagnosis}
                onChange={({ target: { value }}) => {
                    dispatch(setHealthHistoryAction({ diagnosis: value }));
                }}
            >
            </textarea>
       </form>
       <form>
            <legend>Please describe any hospitalizations in the last 5 years:</legend>
            <textarea
                name="hospitalizations"
                rows="10" cols="50"
                onChange={({target: { value }}) => {
                    dispatch(setHealthHistoryAction({ hospitalizations: value }));
                }}>
            </textarea>
       </form>
       <form>
            <legend>Please describe your health habits:</legend>
            <textarea name= "healthHabits" rows="10" cols="50"> </textarea> <br />
       </form>
       <input type="submit" value="Submit"/>
    </div>
  );
};

export default HealthHistory;