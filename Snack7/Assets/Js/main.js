// Stampa le potenze di 2 fino a 1000.

/* Strumenti
-for
-Math
*/

// ciclo for fino all'esponente 1000
/* for (let i = 0; i < 1000; i++) {
   let potenzaDiDue = Math.pow(2, i);
   console.log(potenzaDiDue);
  document.querySelector("h1").innerHTML += `
   ${potenzaDiDue}`;
    
}
 */

// ciclo for fino al risultato di 2 elevato alla 11
for (let i = 0; i < 11; i++) {
   let potenzaDiDue = Math.pow(2, i);
   console.log(potenzaDiDue);
  document.querySelector("h1").innerHTML += `
   ${potenzaDiDue}`;
    
}

