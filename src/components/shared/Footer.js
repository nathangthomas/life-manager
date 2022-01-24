import React from 'react';
import moment from 'moment';
import '../../styles/shared/Footer.css'
import { useDispatch } from 'react-redux';
import { setHealthHistory } from '../../reducers/healthHistorySlice';


    const Footer = ({diagnosis, hospitalizations, healthHabits}) => {
    const dispatch = useDispatch();

  return (
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
  );
}

export default Footer;
