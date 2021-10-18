/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.. */

/* Strumenti
-array
-prompt
-for
-if/else
-querySelector/getElementById
*/

//inizializzazione variabili
const numbers = [];

const numberOne = Number(prompt("Inserisci un numero"));
const numberTwo = Number(prompt("Inserisci un altro numero"));
const numberThree = Number(prompt("Inserisci un altro numero"));
const numberFour = Number(prompt("Inserisci un altro numero"));
const numberFive = Number(prompt("Inserisci un altro numero"));
const numberSix = Number(prompt("Inserisci un altro numero"));


// condizione di verifica
if (numberOne % 2 != 0) {
    numbers.push(numberOne);
    /* console.log(numbers); */
}
if (numberTwo % 2 != 0) {
    numbers.push(numberTwo);
    /* console.log(numbers); */
}
if (numberThree % 2 != 0) {
    numbers.push(numberThree);
    /* console.log(numbers); */
}
if (numberFour % 2 != 0) {
    numbers.push(numberFour);
    /* console.log(numbers); */
}
if (numberFive % 2 != 0) {
    numbers.push(numberFive);
    /* console.log(numbers); */
}
if (numberSix % 2 != 0) {
    numbers.push(numberSix);
    
}

//stampa a schermo
document.getElementById("one").innerHTML = numbers;
/* console.log(numbers); */
