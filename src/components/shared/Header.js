import React from 'react';
import moment from 'moment';

const Header = ({title}) => {

  return (
    <div className="Header">
        <h1 className="title"> {title} </h1>
        <div className="date">
            <label for="date">Date:</label>
            <input type="text" size="10"  id="date" name="date" value={moment().format('MM/DD/YYYY')} />
        </div>
    </div>
  );
}

export default Header;
