import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Currency from './Currency';

const API_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=5516838c15555b48cb6d9369ee07f359`;

function App() {

const [options, setOptions] = useState([])
const [fromCurrency, setfromCurrency] = useState([])
const [toCurrency, setToCurrency] = useState([])
console.log(options);

useEffect(() => {
  fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    setOptions([data.base, ...Object.keys(data.rates)])
    console.log(data)
  })
}, [])

  return (
    <>
      <h1>Currency Converter</h1>
      <Currency 
       options={options}
       />
      <div className='equals'>=</div>
      <Currency
      options={options} 
      />
    </>
  );
}

export default App;