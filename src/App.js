import React from 'react';
import axios from 'axios';
import './App.css';
import Currency from './Currency';

function App() {

  return (
    <div>
      <h1>Currency Converter</h1>
      <Currency />
      <div className='equals'>=</div>
      <Currency />
    </div>
  );
}

export default App;