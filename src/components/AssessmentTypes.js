import React from 'react';
import { Link } from 'react-router-dom';


const AssessmentTypes = () => {
  return (
    <div className="AssessmentTypes">
        <ul>
          <li>
              <Link to="/praPlus">PraPlus</Link>
          </li>          <li>
              <Link to="/promis">Promis</Link>
          </li>          <li>
              <Link to="/healthHistory">Health History</Link>
          </li>

        </ul>
    </div>
  );
}

export default AssessmentTypes;
