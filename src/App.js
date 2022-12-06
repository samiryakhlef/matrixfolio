import React from 'react';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (

    <div className="App">
        <div className="container">
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        </div>
        <Home />
      </div>
      );
}

      export default App;
