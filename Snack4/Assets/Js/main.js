/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */

/* Strumenti
-array
-prompt
-for
-if/else
-querySelector/getElementById
*/

// inizializzazione variabili
const guests = ["Luca", "Anna", "Sara", "Marco", "Filippo", "Lucia", "Stefano", "Lorenzo", "Francesca", "Ludovico"];

const userName = prompt("Quale è il tuo nome?")
const userNameDigit = userName[0].toUpperCase() + userName.slice(1);
/* console.log(userNameDigit); */
let access = false;


// ciclo for
for (let i = 0; i < guests.length; i++) {
    const singleUser = guests[i];
    /* console.log(singleUser); */

    if (userNameDigit == singleUser) {
    access = true;
   
}
}
// condizione di verifica
if (access == true) {
    document.getElementById("one").innerHTML = `${userNameDigit} puoi entrare`;

} else {
   document.getElementById("one").innerHTML = `${userNameDigit} NON puoi entrare`; 
}
