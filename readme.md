Descrizione:
Scrivere un programma che chieda all’utente:

//Il numero di chilometri da percorrere

//Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

//il prezzo del biglietto è definito in base ai km (0.21 € al km)

//va applicato uno sconto del 20% per i minorenni

//va applicato uno sconto del 40% per gli over 65.


MILESTONE 1:
//due input e un bottone (non stilizzati), con le specifiche scritte sopra.

La risposta finale (o output) sarà anch’essa da scrivere in console.

//crea 3




















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
