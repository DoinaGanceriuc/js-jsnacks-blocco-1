// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

/* Strumenti
-prompt
-querySelector
-if/else
*/

// inizializzazione variabili
const numberOne = Number(prompt("Inserisci un numero"));
const numberTwo = Number(prompt("Inserisci un altro numero"));
const numberThree = Number(prompt("Inserisci un altro numero"));
const numberFour = Number(prompt("Inserisci un altro numero"));
const numberFive = Number(prompt("Inserisci un altro numero"));
const numberSix = Number(prompt("Inserisci un altro numero"));
const numberSeven = Number(prompt("Inserisci un altro numero"));
const numberEight = Number(prompt("Inserisci un altro numero"));
const numberNine = Number(prompt("Inserisci un altro numero"));
const numberTen = Number(prompt("Inserisci un altro numero"));

const sumNumbers = numberOne + numberTwo + numberThree + numberFour + numberFive + numberSix + numberSeven + numberEight + numberNine + numberTen;



// condizione di verifica
if (isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree) || isNaN(numberFour) || isNaN(numberFive) || isNaN(numberSix) || isNaN(numberSeven) || isNaN(numberEight)
|| isNaN(numberNine) || isNaN(numberTen)
) {

     let message = `si prega di indicare un numero corretto`;
    document.querySelector("h1").innerHTML = message;

} else {
    //stampa a schermo
document.querySelector("h1").innerHTML = `la somma dei numeri digitati è: ${sumNumbers}`;
}


