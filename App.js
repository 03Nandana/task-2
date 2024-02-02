
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'white', padding: '20px' }}>
      <header className="App-header">
        <h1>Director and Movies</h1>

        {/* Four Rectangular Boxes */}
        <div className="box-container">
          <div className="box">Atlee</div>
          <div className="box">Mohan Lal</div>
          <div className="box">James Bond</div>
          <div className="box">Avatar</div>
        </div>
      </header>
    </div>
  );
}

export default App;

