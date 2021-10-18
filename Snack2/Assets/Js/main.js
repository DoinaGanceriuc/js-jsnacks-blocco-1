// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/* Strumenti
-prompt
-if/else
-querySelector/getElementById
*/

//inizializzazione variabili
const wordOne = prompt("Inserisci una parola");
const wordTwo = prompt("Inserisci un'altra parola");


// condizione di verifica
if (wordOne.length < wordTwo.length) {
    /* let message = `la parola ${wordOne} è più corta della parola ${wordTwo}`; */
    document.getElementById("one").innerHTML = `"${wordOne}" è la parola più corta`;
    
} else if (wordOne.length > wordTwo.length) {
    document.getElementById("one").innerHTML = `"${wordOne}" è la parola più lunga`;
   
} else {
    document.getElementById("one").innerHTML = `le due parole digitate hanno la stessa lunghezza`;
  
}