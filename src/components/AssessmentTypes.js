import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  PraPlus from './PraPlus';
import  HealthHistory from './HealthHistory';
import  Promis from './Promis';
import Card from './shared/Card';
import { setAssessmentType } from '../reducers/assessmentTypeSlice';
import '../styles/AssessmentTypes.css'


const AssessmentTypes = () => {

  const dispatch = useDispatch();
  const assessment = useSelector(state => state.assessmentType);
  const [type, setType] = useState('');

  function renderAssessment() {
    if (type === "praPlus") {
      return <PraPlus />;
    }
    if (type === "promis") {
       return <Promis />;
     }
    if (type === "healthHistory") {
       return <HealthHistory />;
    }
  }

  return (
    <div className="AssessmentTypes">
      <ul className="assessmentTypesList">
        <div className="typesTitle"> Assessment Types </div>
        <li>
          <Link onClick={() => {
            setType("promis")
            dispatch(
              setAssessmentType({
                assessmentType: type
              })
            )
          }}
          >
            Promis
          </Link>
          </li>
          <li>
            <Link onClick={() => {
              setType("praPlus")
              dispatch(
                setAssessmentType({
                  assessmentType: type
                })
              )
            }}
            >
              PraPlus
            </Link>
            </li>
            <li>
            <Link onClick={() => {
              setType("healthHistory")
              dispatch(
                setAssessmentType({
                  assessmentType: type
                })
              )
            }}
            >
              Health History
            </Link>
            </li>
        </ul>
        <Card
          child={renderAssessment()}
        />
    </div>
  );
}

export default AssessmentTypes;
