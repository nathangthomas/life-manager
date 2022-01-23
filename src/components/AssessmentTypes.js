import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  PraPlus from './PraPlus';
import  HealthHistory from './HealthHistory';
import  Promis from './Promis';
import Card from './shared/Card';
import { setAssessmentTypeAction } from '../actions/assessmentTypeActions';


const AssessmentTypes = () => {

    const dispatch = useDispatch();
    const type = useSelector(state => state.assessmentType);


    function renderAssessment() {
      if (type.assessmentType === "praPlus") {
        return <PraPlus />;
      }
      if (type.assessmentType === "promis") {
         return <Promis />;
       }
      if (type.assessmentType === "healthHistory") {
         return <HealthHistory />;
      }
    }

    return (

        <div className="AssessmentTypes">
            <ul>
              <li>
                 <Link onClick={() => {
                    dispatch(setAssessmentTypeAction({ assessmentType: "praPlus" }))
                    }}
                 >
                    ParaPlus
                 </Link>
              </li>
              <li>
                 <Link onClick={() => {
                    dispatch(setAssessmentTypeAction({ assessmentType: "promis" }))
                    }}
                 >
                    Promis
                 </Link>
              </li>
              <li>
                 <Link onClick={() => {
                    dispatch(setAssessmentTypeAction({ assessmentType: "healthHistory" }))
                    }}
                 >
                    Health History
                 </Link>
              </li>

            </ul>

            <Card
                child={renderAssessment()} className="Sample"
            />

        </div>
    );
}

export default AssessmentTypes;
