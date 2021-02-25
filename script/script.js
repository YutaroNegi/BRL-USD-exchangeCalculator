let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
let btn = document.getElementById("btn")
let result = document.getElementById("result")
let select = document.getElementById("select")


btn.addEventListener('click', function () {

    let currency = select.options[select.selectedIndex].value
    let amountInput = document.getElementById("amount")
    let amount = parseFloat(amountInput.value)
    console.log(amountInput.value);

    if (isNaN(amount) ) {
        result.innerHTML = "Please Insert a Number"
    } else {

        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                let rate = data.rates.BRL
                if (currency == "brl") {
                    let converted = amount / rate
                    result.innerHTML = converted.toFixed(2) + " USD"
                } else {
                    let converted = amount * rate
                    result.innerHTML = converted.toFixed(2) + " BRL"
                }
            })
    }

})