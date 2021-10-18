// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/* Strumenti
-prompt
-if/else
-querySelector
*/

// inizializzazione variabili
const numberOne = Number(prompt("Inserisci un numero"));
const numberTwo = Number(prompt("Inserisci un altro numero"));

// condizione di verifica
if (isNaN(numberOne) || isNaN(numberTwo)) {
     let message = `si prega di indicare un numero corretto`;
    document.querySelector("h1").innerHTML = message;

}
else if (numberOne > numberTwo) {
    let message = `il numero ${numberOne} è maggiore del numero ${numberTwo}`;
    document.querySelector("h1").innerHTML = message;
    /* console.log(`il numero ${numberOne} è maggiore del numero ${numberTwo}`); */
} else if (numberOne < numberTwo) {
    let message = `il numero ${numberTwo} è maggiore del numero ${numberOne}`;
    document.querySelector("h1").innerHTML = message;
    /* console.log(`il numero ${numberTwo} è maggiore del numero ${numberOne}`); */
} else {
    let message = `i numeri digitati sono identici`;
    document.querySelector("h1").innerHTML = message;
   /*  console.log(`i numeri digitati sono identici`); */
}