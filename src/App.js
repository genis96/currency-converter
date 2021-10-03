import React, { useEffect, useState } from 'react';
import './App.css';
import Currency from './Currency';


//success, timestamp, base, rates, symbols - endpoints from the API 

const API_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=5516838c15555b48cb6d9369ee07f359`;

function App() {

const [options, setOptions] = useState([])
const [fromCurrency, setFromCurrency] = useState()
const [toCurrency, setToCurrency] = useState()
const [exchangeRate, setExchangeRate] = useState()
const [amount, setAmount] = useState(1)
const [amountFromCurr, setAmountFromCurr] = useState(true)
console.log(options);
console.log(exchangeRate);

let toAmount, fromAmount
if(amountFromCurr) {
  fromAmount = amount
  toAmount = amount * exchangeRate
} else {
  toAmount = amount
  fromAmount = amount / exchangeRate
}

useEffect(() => {
  fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const firstCurrency = Object.keys(data.rates)[0];
    setOptions([data.base, ...Object.keys(data.rates)])
    setFromCurrency(data.base)
    setToCurrency(firstCurrency)
    setExchangeRate(data.rates[firstCurrency])
  })
}, [])

// updates every time curr. changes - DOES NOT WORK
// useEffect(() => {
//   if (fromCurrency !== null && toCurrency !== null) {
//     fetch(`${API_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
//       .then(res => res.json())
//       .then(data => setExchangeRate(data.rates[toCurrency]))
//   }
// }, [fromCurrency, toCurrency])


function handleFromAmountChange(e) {
  setAmount(e.target.value)
  setAmountFromCurr(true)
}

function handleToAmountChange(e) {
  setAmount(e.target.value)
  setAmountFromCurr(false)
}

  return (
    <>
      <h1>Currency Converter</h1>
      <Currency 
       options={options}
       selectCurrency={fromCurrency}
       onChangeCurrency={e => setFromCurrency(e.target.value)}
       onChangeAmount={handleFromAmountChange}
       amount={fromAmount}
       />
      <div className='equals'>=</div>
      <Currency
      options={options} 
      selectCurrency={toCurrency}
      onChangeCurrency={e => setToCurrency(e.target.value)}
      onChangeAmount={handleToAmountChange}
      amount={toAmount}
      />
    </>
  );
}

export default App;