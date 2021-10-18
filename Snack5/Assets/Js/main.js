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

// ciclo for
for (let index = 0; index < 6; index++) {
    /* const element = numbers[index]; */
    const askNumber = Number(prompt("Inserisci un numero"));
    /* console.log(askNumber); */

// condizione di verifica
 if (askNumber % 2 != 0) {
    numbers.push(askNumber);
}
    
}

//stampa a schermo
document.getElementById("one").innerHTML = numbers;
/* console.log(numbers); */
