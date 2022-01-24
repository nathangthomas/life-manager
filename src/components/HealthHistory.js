import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { setHealthHistoryAction } from '../actions/healthHistoryActions';

const HealthHistory = () => {
  const dispatch = useDispatch();
  const healthHistory = useSelector(state   => state.healthHistory);

//  function handleChange(event) {
//    event => setHealthHistoryAction(event.target.value);
//  }

  return (
    <div className="HealthHistory">
        <Header title="Health History" />
        <form>
            <legend>Please describe any current diagnosis.</legend>
            <textarea
                className="textarea"
                name="diagnosis"
                rows="8" cols="49"
                value={healthHistory.diagnosis}
                onChange={e => setHealthHistoryAction(e.target.value)}
            >
            </textarea>
       </form>
        <br />
       <form>
            <legend>Please describe any hospitalizations in the last 5 years.</legend>
            <textarea
                className="textarea"
                name="hospitalizations"
                rows="8" cols="49"
                onChange={({target: { value }}) => {
                    dispatch(setHealthHistoryAction({ hospitalizations: value }));
                }}>
            </textarea>
       </form>
        <br />
       <form>
            <legend>Please describe your health habits.</legend>
            <textarea
                name= "healthHabits"
                rows="8"
                cols="49">
                </textarea>
       </form>
        <br />
       <Footer />
    </div>
  );
};

export default HealthHistory;