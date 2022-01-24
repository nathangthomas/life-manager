import React from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';

const Promis = () => {
  return (
    <div className="Promis">
        <Header title="Promis" />
        <fieldset>
            <legend>Rate your ability to carry out physical activities</legend>
            <input type="radio" name="activities" id="1" value="1" /><label for="1">1</label>
            <input type="radio" name="activities" id="2" value="2" /><label for="2">2</label>
            <input type="radio" name="activities" id="3" value="3" /><label for="3">3</label>
            <input type="radio" name="activities" id="4" value="4" /><label for="4">4</label>
            <input type="radio" name="activities" id="5" value="5" /><label for="5">5</label>
         </fieldset>
         <br />
         <fieldset>
            <legend>Rate your daily pain</legend>
            <input type="radio" name="pain" id="1" value="1" /><label for="1">1</label>
            <input type="radio" name="pain" id="2" value="2" /><label for="2">2</label>
            <input type="radio" name="pain" id="3" value="3" /><label for="3">3</label>
            <input type="radio" name="pain" id="4" value="4" /><label for="4">4</label>
            <input type="radio" name="pain" id="5" value="5" /><label for="5">5</label>
         </fieldset>
         <br />
         <fieldset>
            <legend>Rate your overall health</legend>
            <input type="radio" name="health" id="1" value="1" /><label for="1">1</label>
            <input type="radio" name="health" id="2" value="2" /><label for="2">2</label>
            <input type="radio" name="health" id="3" value="3" /><label for="3">3</label>
            <input type="radio" name="health" id="4" value="4" /><label for="4">4</label>
            <input type="radio" name="health" id="5" value="5" /><label for="5">5</label>
         </fieldset>
         <br />
         <Footer />
    </div>
  );
}

export default Promis;
