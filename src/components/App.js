import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/App.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <div>
            <Link to="/assessmentTypes">Click to Get Started </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
