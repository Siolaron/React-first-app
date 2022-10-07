import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { exchangeApiID } from "../../apis/exchange";

export const ExchangePage = () =>{
    let {exchangeId} = useParams();

    const [exchange, setExchange] = useState([]);
    useEffect(() => {
        exchangeApiID(exchangeId).then(item =>{
        setExchange(item) 
    }) 
  }, [])
    return(
        <div className="exchange" key={exchange.id}>
            <h2>{exchange.name}</h2>
            <details>
                <summary>Description</summary>
                {exchange.description}
            </details>
            <table>
                <thead>
                    <tr><th>Symbol</th><th>Name</th></tr>
                </thead>
                <tbody>
                    {exchange.fiats && exchange.fiats.map((fiat)=> <tr><td>{fiat.symbol}</td><td>{fiat.name}</td></tr>)}
                </tbody>
            </table>
        </div>
        )
}