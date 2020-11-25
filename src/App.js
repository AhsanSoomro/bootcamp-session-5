import React from 'react';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext';

function App() {
  return (
    <CounterContext.Provider value={10}>
      <div>
        <Parent  />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
