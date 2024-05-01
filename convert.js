
let apiKey = "7c5010926b25adf81f4684a0"
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
const fromList = document.getElementById('from-currency')
const toList = document.getElementById('to-currency')

//dropdown lists 1
currencies.forEach((currency) => { 
    const option = document.createElement("option")
    option.value = currency
    option.text = currency
    fromList.add(option)
});

//dropdown lists 2
currencies.forEach((currency) => { 
    const option = document.createElement("option")
    option.value = currency
    option.text = currency
    toList.add(option)
});

//set default values 
fromList.value = "EUR"
toList.value = "INR"

let convertcurrency = () => {
    const amount = document.querySelector("#quantity").value
    const fromCurrency = fromList.value
    const toCurrency = toList.value

    if(amount.length == 0){
        alert("Please Enter the amount")
    }
    else{
        fetch(api).then(resp => resp.json()).then(data => {
            let fromRates = data.conversion_rates[fromCurrency]
            let toRates = data.conversion_rates[toCurrency]
            const final = (amount/ fromRates) * toRates
            result.innerHTML = `${amount} ${fromCurrency} = ${final.toFixed(
                2
              )} ${toCurrency}`;
        })
    }
}

document.querySelector("#convert-btn").addEventListener("click", convertcurrency)
window.addEventListener("load", convertcurrency)