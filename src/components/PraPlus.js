import React from 'react';
import Header from './shared/Header';

const PraPlus = () => {

  return (
    <div className="PraPlus">
        <Header title="PraPlus" />
        <fieldset>
            <legend>In the previous 12 months, have you stayed overnight as a patient in a hospital?</legend>
            <input type="radio" name="hospitalPatient" id="never" value="never" /><label for="track">Never</label><br />
            <input type="radio" name="hospitalPatient" id="once" value="once" /><label for="once">Once</label><br />
            <input type="radio" name="hospitalPatient" id="twice" value="twice" /><label for="twice">Twice</label><br />
            <input type="radio" name="hospitalPatient" id="threePlus" value="threePlus" /><label for="threePlus">Three or More Times</label><br />
        </fieldset>
        <fieldset>
            <legend>Have you ever had heart disease?</legend>
            <input type="radio" name="heartDisease" id="yes" value="yes" /><label for="yes">Yes</label><br />
            <input type="radio" name="heartDisease" id="no" value="no"  /><label for="no">No</label><br />
            <input type="radio" name="heartDisease" id="unsure" value="unsure" /><label for="message">Don&apos;t Know </label><br />
        </fieldset>
        <fieldset>
            <legend>Please check all conditions for which you are currently receiving medical treatment?</legend>
            <input type="checkbox" name="medicalTreatment1" id="medicalTreatment1" value="medicalTreatment1" /><label for="medicalTreatment1">Breathing Problems</label><br />
            <input type="checkbox" name="medicalTreatment2" id="medicalTreatment2" value="medicalTreatment2" /><label for="medicalTreatment2">High Blood Pressure</label><br />
            <input type="checkbox" name="medicalTreatment3" id="medicalTreatment3" value="medicalTreatment3" /><label for="medicalTreatment3">Heart Problems</label><br />
            <input type="checkbox" name="medicalTreatment4" id="medicalTreatment4" value="medicalTreatment4" /><label for="medicalTreatment4">Urinary Problems</label><br />
            <input type="checkbox" name="medicalTreatment5" id="medicalTreatment5" value="medicalTreatment5" /><label for="medicalTreatment5">Mental Problems</label><br />
            <input type="checkbox" name="medicalTreatment6" id="medicalTreatment6" value="medicalTreatment6" /><label for="medicalTreatment6">Ankle Swelling</label><br />
            <input type="checkbox" name="medicalTreatment7" id="medicalTreatment7" value="medicalTreatment7" /><label for="medicalTreatment7">Cancer</label><br />
        </fieldset>
    </div>
  );
}

export default PraPlus;
