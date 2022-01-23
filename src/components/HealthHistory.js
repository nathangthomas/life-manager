import React from 'react';
import Header from './shared/Header';

const HealthHistory = () => {
  return (
    <div className="HealthHistory">
        <Header title="Health History" />
        <form>
            <legend>Please describe any current diagnosis:</legend>
            <textarea name= "diagnosis" rows="10" cols="50"> </textarea> <br />
       </form>
       <form>
            <legend>Please describe any hospitalizations in the last 5 years:</legend>
            <textarea name= "hospitalizations" rows="10" cols="50"> </textarea> <br />
       </form>
       <form>
            <legend>Please describe your health habits:</legend>
            <textarea name= "hospitalizations" rows="10" cols="50"> </textarea> <br />
       </form>
       <input type="submit" value="Submit"/>
    </div>
  );
}

export default HealthHistory;