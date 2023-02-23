//definizioni variabili
const inputName = document.getElementById('name');
const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const buttonGenerate = document.getElementById('genera');


//funzione del bottone
buttonGenerate.addEventListener('click',
function(){

    const inputNameValue = inputName.value;
    const inputKmValue = Number(inputKm.value);
    const inputAgeValue = inputAge.value;


    console.log({inputNameValue, inputKmValue, inputAgeValue});


    //prezzo totale senza sconti
    let ticketPrice = 0.21 * inputKmValue;

    if(inputAgeValue === 'minorenne'){
        ticketPrice = ticketPrice * 0.8;//20% sconto
    } else if (inputAgeValue === 'senior'){
        ticketPrice = ticketPrice * 0.6;//40% sconto
    }


    console.log(ticketPrice.toFixed(2));

}
)

