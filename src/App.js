import logo from './logo.svg';
import './App.css';
import { exchangeApi } from './apis/exchange';
import { Fragment, useEffect, useState } from 'react';
import { Card } from './components/Card';



function App() {
  
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    exchangeApi().then(items =>{

      setExchanges(items) 
    }) 
  }, [])
  
  return (
    <>
      <h1>Exchanges acceptant le Dogecoin</h1>
      <div class="home-grid">
          {exchanges.map((exchange)=> <Card key={exchange.id} id={exchange.id} name={exchange.name} adjusted_volume={exchange.adjusted_volume_24h_share}/>)}
      </div>
    </>
  );
}

export default App;
