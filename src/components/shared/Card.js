import React from 'react';

const Card = ({ child, className = '' }) => {

  return (
    <div className={'Card ${className}'}'>
        <div>
            {child}
        </div>
    </div>
  );
}

export default Card;
