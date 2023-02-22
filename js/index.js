alert('benvenuti su Treni Boolean');

//prompt richiesta di kilometri  "distanza"

const distanza = parseInt(prompt ("Quanti kilometri vuoi percorrere? "));
console.log(distanza)

//prompt richiesta anni 
const anni = parseInt(prompt("Quanti anni hai? "));
console.log(anni)




//il prezzo del biglietto è definito in base ai km (0.21 € al km)

const costo = '0.21'

//Se l'eta e maggiore di 18 e inferiore di 65 
   //mostra il prezzo originale

let prezzo = `${distanza} * ${costo} = ${distanza * costo}`
console.log(prezzo);

document.querySelector('div').innerHTML = `prezzo ${(distanza * costo).toFixed(2)}`;

//sconto per minori e senior

const scontoMinore = '0.2'
const scontoSenior = '0.4'

//Se l'eta inserita e' minore di 18
  //calcola prezzoScontato = prezzo - (prezzo / 100 * 20)

if(anni < 18){
    let prezzoScontato = `${distanza} * ${costo} * ${scontoMinore} = ${distanza * costo * scontoMinore}`;
    console.log(prezzoScontato)

    document.querySelector('div').innerHTML = `prezzo ${(distanza * costo * scontoMinore).toFixed(2)}`;
}//Se l'eta inserita e' maggiore/uguale di 65
  //calcola prezzoScontato = prezzo - (prezzo / 100 * 40)
   else if(anni >= 65){
    let prezzoScontato = `${distanza} * ${costo} * ${scontoSenior} = ${distanza * costo * scontoSenior}`;
    console.log(prezzoScontato)

    document.querySelector('div').innerHTML = `prezzo ${(distanza * costo * scontoSenior).toFixed(2)}`
}
