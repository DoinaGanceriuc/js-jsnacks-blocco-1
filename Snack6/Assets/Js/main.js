// Stampa il cubo dei primi N numeri,dove N è un numero indicato dall’utente.

/* Strumenti
-prompt
-if/else
-Math
*/

// inizializzazione delle variabili
const number = Number(prompt("Inserisci un numero"));

let cuboNumber = Math.pow(number, 3);
/* console.log(cuboNumber); */

// condizione di verifica
if (isNaN(number)){
     let message = `si prega di indicare un numero corretto`;
    document.querySelector("h1").innerHTML = message;

} else {
    document.querySelector("h1").innerHTML = `il cubo di ${number} è ${cuboNumber}`;
}