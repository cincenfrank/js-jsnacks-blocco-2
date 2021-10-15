// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi
//  fino a quando ne avrà tanti quanti l’altro.

// const array1 = [15, 2, 7];
// const array2 = [5];

const array1 = ["ciao"];
const array2 = ["hola", "hello"];

console.log("array1 => " + array1.toString());
console.log("array2 => " + array2.toString());

let i = 0;
// loop in case of array1>=array2
if (array1.length >= array2.length)
  while (array2.length < array1.length && i < array1.length) {
    array2.push(array1[i]);
    i++;
  }
// loop in case of array2>=array1
else {
  while (array1.length < array2.length && i < array2.length) {
    array1.push(array2[i]);
    i++;
  }
}

console.log("final array1 => " + array1.toString());
console.log("final array2 => " + array2.toString());
