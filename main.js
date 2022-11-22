const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]')
const elementEUR = document.querySelector('[data-value="EUR"]')
const elementPLN = document.querySelector('[data-value="PLN"]')

const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

getCurrencies();

async function getCurrencies() {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const data = await response.json();
    const result = await data;

    console.log(result)

    rates.USD = result[25].rate;
    rates.EUR = result[32].rate;
    rates.PLN = result[33].rate;

    console.log(rates);

    elementUSD.textContent = result[25].rate.toFixed(2);
    elementEUR.textContent = result[32].rate.toFixed(2);
    elementPLN.textContent = result[33].rate.toFixed(2);
    

}

input.oninput = function() {
    console.log('change');
    result.value = (input.value / rates[select.value]).toFixed(3);
}

select.oninput = function() {
    console.log('change');
    result.value = (input.value / rates[select.value]).toFixed(3);
}