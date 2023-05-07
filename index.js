
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
        const {name, symbol} = Object;

        
        return(
            `<div class='container'>
            <h1>name : ${name}</h1>
            <p> symbol  : ${symbol}</p>
            </div>`
        )
    })
    display.innerHTML = dataDisplay
}
displayUser();