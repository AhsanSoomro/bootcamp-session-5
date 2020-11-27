import React from 'react';
import {useState} from 'react';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext';

function App() {
  let counterState = useState(1)
  // let [count, setCount] = useState(30)

  return (
    <CounterContext.Provider value={counterState}>
      <div>
        <Parent  />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
