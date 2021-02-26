const originalString = 'In cryptography, Alice and Bob are fictional characters commonly used as placeholders\n\
in discussions about cryptographic protocols or systems.\n\
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.\n\
The most common characters are Alice and Bob.Eve, Mallory, and Trent are also common names.'



//const originalString = "Javascript is a programming language. I'm learning javascript."

// Search string for "javascript" and replace with "JavaScript"
/*const newString = originalString.replace(/Alice/gi, "coconul");

console.log(newString);

//regex attention not oki*/

// correction 
let name = 'Alice'
let replname = 'Christian'
if (txt.includes(name)) {
  // Si le nom est présent, procéder au remplacement grace a la commande .replaceAll sur toutes les lignes
  let newtxt = txt.replaceAll(name, replname)
  console.log(newtxt)
} else {
  console.log(`le nom ${name} n'est pas dans la phrase`)
}