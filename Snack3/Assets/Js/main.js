// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

/* Strumenti
-prompt
-querySelector
-for
*/

// inizializzazione variabili
let sumNumbers = 0;
let message = false;

// ciclo for
for (let index = 0; index < 10; index++) {
    let askNumber = Number(prompt("Inserisci un numero"));
    /* console.log(askNumber); */
   
    sumNumbers = sumNumbers + askNumber;
    /* console.log(sumNumbers); */

}


//stampa a schermo
document.querySelector("h1").innerHTML = `la somma dei numeri digitati è: ${sumNumbers}`;
 







    




