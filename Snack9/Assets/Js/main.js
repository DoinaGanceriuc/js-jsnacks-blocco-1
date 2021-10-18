/* Calcola la somma e la media dei primi 10 numeri. */

/* Strumenti
-for
-querySelector
*/

// inizializzazione delle varibili
let somma = 0;
let media = 0;

// ciclo for
for (let i = 0; i <= 10; i++) {
    let singleNumber = i;
    /* console.log(singleNumber); */
    
    somma = somma + singleNumber;
    /* console.log(somma); */
    media = somma / 11;
/*     console.log(media);    */
    
}

// stampa a schermo
document.querySelector(".somma").innerHTML = `la somma dei primi 10 numeri è: ${somma}`;
document.querySelector(".media").innerHTML = `la media dei primi 10 numeri è: ${media}`;