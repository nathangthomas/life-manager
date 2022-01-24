import React from 'react';
import '../../styles/shared/Card.css'

const Card = ({ child, className = '' }) => {

  return (
    <div className='Card'>
        <div>
            {child}
        </div>
    </div>
  );
}

export default Card;
