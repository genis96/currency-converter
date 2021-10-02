import React from 'react';
import axios from 'axios';
import './App.css';
import Currency from './Currency';

function App() {

  const [currency, setCurrency] = useState([]);
  const [conversion, setConversion] = useState([]);

  useEffect(() => {
    axios.get('https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=usd&to=cad&amount=1')
    .then(res => {
      setCurrency(res.data);
      console.log(res.data);
    }).catch(error => console.log(error));
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;