import React from 'react';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext';

function App() {
  return (
    <CounterContext value={10}>
      <div>
        <Parent  />
      </div>
    </CounterContext>
  );
}

export default App;
