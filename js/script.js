// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.
// Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
// Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.

// declaring variables
let userInput;
let userInputInt;
do {
  // get user input
  userInput = prompt("please pick a number");
  // parse user input as int
  userInputInt = parseInt(userInput);
} while (isNaN(userInputInt));

// check if even or odd and print log
if (userInputInt % 2 == 0) {
  console.log(`number unmodified: ${userInputInt}`);
} else {
  console.log(`number modified: ${userInputInt + 1}`);
}
