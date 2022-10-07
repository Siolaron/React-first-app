export const exchangeApi=() =>{
    return fetch("https://api.coinpaprika.com/v1/coins/doge-dogecoin/exchanges")
    .then(res=>{
        return res.json()
    })
}

export const exchangeApiID=(id) =>{
    return fetch("https://api.coinpaprika.com/v1/exchanges/"+id)
    .then(res=>{
        return res.json()
    })
}