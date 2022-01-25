import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { setHealthHistory } from '../reducers/healthHistorySlice';


const HealthHistory = () => {
  const dispatch = useDispatch();
  const healthHistory = useSelector(state => state.healthHistory);
  const [diagnosis, setDiagnosis] = useState('');
  const [hospitalizations, setHospitalizations] = useState('');
  const [healthHabits, setHealthHabits] = useState('');


  return (
    <div className="HealthHistory">
        <Header title="Health History" />
        <form>
            <legend>Please describe any current diagnosis.</legend>
            <textarea
                defaultValue={healthHistory.diagnosis}
                rows="8" cols="49"
                onChange={(e) => {
                    setDiagnosis(e.target.value);
                }}
            >
            </textarea>
       </form>
        <br />
       <form>
            <legend>Please describe any hospitalizations in the last 5 years.</legend>
            <textarea
                defaultValue={healthHistory.hospitalizations}
                rows="8" cols="49"
                onChange={(e) => {
                   setHospitalizations(e.target.value);
                }}
            >
            </textarea>
       </form>
        <br />
       <form>
            <legend>Please describe your health habits.</legend>
            <textarea
                defaultValue={healthHistory.healthHabits}
                rows="8" cols="49"
                onChange={(e) => {
                    setHealthHabits(e.target.value);
                }}
             >
             </textarea>
       </form>
        <br />
         <div className='Footer'>
            <div className='save-btn'>
                 <button type="button">Save</button>
            </div>
            <div className='submit-btn'>
                 <button type="button"
                     onClick={() => {
                         dispatch(
                             setHealthHistory({
                                  diagnosis: diagnosis,
                                  hospitalizations: hospitalizations,
                                  healthHabits: healthHabits
                             })
                         )
                     }}
                  >
                  Submit</button>
              </div>
         </div>

    </div>
  );
};

export default HealthHistory;