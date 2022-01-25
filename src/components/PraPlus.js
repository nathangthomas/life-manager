import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './shared/Header';
import { setPraPlus } from '../reducers/praPlusSlice';


const PraPlus = () => {

  const dispatch = useDispatch();
  const [hospitalizations, setHospitalizations] = useState('');
  const [heartDisease, setHeartDisease] = useState('');
  const [complications, setComplications] = useState([]);

  return (
    <div className="PraPlus">
        <Header title="PraPlus" />
        <fieldset>
            <legend>In the previous 12 months, have you stayed overnight as a patient in a hospital?</legend>
            <input type="radio" name="hospitalizations" id="never" value="never" onClick={() => {setHospitalizations("never")}}/><label for="never">Never</label><br />
            <input type="radio" name="hospitalizations" id="once" value="once" onClick={() => {setHospitalizations("once")}}/><label for="once">Once</label><br />
            <input type="radio" name="hospitalizations" id="twice" value="twice" onClick={() => {setHospitalizations("twice")}}/><label for="twice">Twice</label><br />
            <input type="radio" name="hospitalizations" id="threePlus" value="threePlus" onClick={() => {setHospitalizations("threePlus")}}/><label for="threePlus">Three or More Times</label><br />
        </fieldset>
        <br />
        <fieldset>
            <legend>Have you ever had heart disease?</legend>
            <input type="radio" name="heartDisease" id="yes" value="yes" onClick={() => {setHeartDisease("yes")}}/><label for="yes">Yes</label><br />
            <input type="radio" name="heartDisease" id="no" value="no"  onClick={() => {setHeartDisease("no")}}/><label for="no">No</label><br />
            <input type="radio" name="heartDisease" id="unsure" value="unsure" onClick={() => {setHeartDisease("unsure")}}/><label for="unsure">Don&apos;t Know </label><br />
        </fieldset>
        <br />
        <fieldset>
            <legend>Please check all conditions for which you are currently receiving medical treatment?</legend>
            <input type="checkbox" onClick={() => {setComplications([...complications, "breathingProblems"])}}/><label>Breathing Problems</label><br />
            <input type="checkbox" onClick={() => {setComplications([...complications, "highBloodPressure"])}}/><label>High Blood Pressure</label><br />
            <input type="checkbox" onClick={() => {setComplications([...complications, "heartProblems"])}}/><label>Heart Problems</label><br />
            <input type="checkbox" onClick={() => {setComplications([...complications, "urinaryProblems"])}}/><label>Urinary Problems</label><br />
            <input type="checkbox" onClick={() => {setComplications([...complications, "mentalProblems"])}}/><label>Mental Problems</label><br />
            <input type="checkbox" onClick={() => {setComplications([...complications, "ankleSwelling"])}}/><label>Ankle Swelling</label><br />
            <input type="checkbox" onClick={() => {setComplications([...complications, "cancer"])}}/><label>Cancer</label><br />
        </fieldset>
        <br />
       <div className='Footer'>
              <div className='save-btn'>
                   <button type="button">Save</button>
              </div>
              <div className='submit-btn'>
                   <button type="button"
                       onClick={() => {
                           dispatch(
                               setPraPlus({
                                    hospitalizations: hospitalizations,
                                    heartDisease: heartDisease,
                                    complications: complications
                               })
                           )
                       }}
                    >
                    Submit</button>
              </div>
           </div>
    </div>
  );
}

export default PraPlus;
