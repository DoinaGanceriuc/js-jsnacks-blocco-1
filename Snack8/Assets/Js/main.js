/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

/* Strumenti
-prompt
-querySelector
-for
*/

// inizializzazione delle variabili
let number = prompt("Inserisci un numero di 4 cifre");

let somma = 0;

// ciclo for
for (let index = 0; index < number.length; index++) {
    const element = Number(number[index]);
 /*    console.log(element); */
    somma = somma + element;
      
    
}
/* console.log(somma); */

// stampa a schermo
document.querySelector("h1").innerHTML = `la somma dei numeri digitati è: ${somma}`;