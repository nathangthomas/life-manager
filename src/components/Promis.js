import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { setPromis } from '../reducers/promisSlice';

const Promis = () => {

  const dispatch = useDispatch();
  const [activities, setActivities] = useState('');
  const [pain, setPain] = useState('');
  const [health, setHealth] = useState('')

  return (
    <div className="Promis">
        <Header title="Promis" />
        <fieldset>
            <legend>Rate your ability to carry out physical activities</legend>
            <input type="radio" name="activities" id="1" value="1" onClick={() => {setActivities("1")}}/><label for="1">1</label>
            <input type="radio" name="activities" id="2" value="2" onClick={() => {setActivities("2")}}/><label for="2">2</label>
            <input type="radio" name="activities" id="3" value="3" onClick={() => {setActivities("3")}}/><label for="3">3</label>
            <input type="radio" name="activities" id="4" value="4" onClick={() => {setActivities("4")}}/><label for="4">4</label>
            <input type="radio" name="activities" id="5" value="5" onClick={() => {setActivities("5")}}/><label for="5">5</label>
         </fieldset>
         <br />
         <fieldset>
            <legend>Rate your daily pain</legend>
            <input type="radio" name="pain" id="1" value="1" onClick={() => {setPain("1")}}/><label for="1">1</label>
            <input type="radio" name="pain" id="2" value="2" onClick={() => {setPain("2")}}/><label for="2">2</label>
            <input type="radio" name="pain" id="3" value="3" onClick={() => {setPain("3")}}/><label for="3">3</label>
            <input type="radio" name="pain" id="4" value="4" onClick={() => {setPain("4")}}/><label for="4">4</label>
            <input type="radio" name="pain" id="5" value="5" onClick={() => {setPain("5")}}/><label for="5">5</label>
         </fieldset>
         <br />
         <fieldset>
            <legend>Rate your overall health</legend>
            <input type="radio" name="health" id="1" value="1" onClick={() => {setHealth("1")}}/><label for="1">1</label>
            <input type="radio" name="health" id="2" value="2" onClick={() => {setHealth("2")}}/><label for="2">2</label>
            <input type="radio" name="health" id="3" value="3" onClick={() => {setHealth("3")}}/><label for="3">3</label>
            <input type="radio" name="health" id="4" value="4" onClick={() => {setHealth("4")}}/><label for="4">4</label>
            <input type="radio" name="health" id="5" value="5" onClick={() => {setHealth("5")}}/><label for="5">5</label>
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
                               setPromis({
                                    activities: activities,
                                    pain: pain,
                                    health: health
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

export default Promis;
