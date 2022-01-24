import React from 'react';
import moment from 'moment';
import '../../styles/shared/Footer.css'


const Header = ({title}) => {

  return (
    <div className='Footer'>
       <div className='save-btn'>
            <button type="button">Save</button>
       </div>
       <div className='submit-btn'>
            <button type="button">Submit</button>
       </div>
    </div>
  );
}

export default Header;
