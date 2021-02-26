/*
const msg = "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript";
const mot = "Javascript";

console.log(`${msg.includes(mot) ? "Le mot javascript est bien présent" : "Le mot Javascript n'est pas présent"}`); salle rouge solution*/


/*let text = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript';
let JS_text = 'Javascript';  // mot a retrouver

console.log(text)          //affiche le text



if (text.includes(JS_text)) {                  //si le text inclu Javascript( JS_text)
  console.log(`IL Y A BIEN LE MOT ${JS_text}`)
} else {
  console.log(`Le mot Javascript n'y est pas !!! `)  //sinon affiche n y est
}*/

let sentence = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'
let word = 'Javascript'
if (sentence.includes(word)) {
  console.log(`The word "${word}" is includes on the text :\n${sentence}`)
} else {
  console.log(`This text do not includes the word "${word}".`)
}