
const URL  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'


const display = document.querySelector('#demo')

const getData = async ()=>{
    const res = await fetch(URL);
    const data = res.json();
    console.log(data)
    return data;
}

const displayUser = async ()=>{
    const payload = await getData();

    let dataDisplay = payload.map((Object) =>{

        const {name, symbol ,current_price, image ,market_cap} = Object;
        
     

        
        return(
            `<div class='container'>
                <div class='coin-item'>
                  <h1>  ${name}</h1>
                  <p>  ${symbol}</p>
                  <h1> price : ${current_price} usd </h1>
                  <p class='market-cap'> market cap : ${market_cap}</p>
                  <img src='${image}'></img>
                </div>
               
            </div>`
        )
    })
    display.innerHTML = dataDisplay
}
displayUser();