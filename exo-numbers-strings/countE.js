//Ecrivez un programme qui compte le nombre de e dans le texte de l'exercice nbChar.js


let msg = "Je suis le ténébreux, - le veuf, - l'inconsolé," +
  "Le prince d'Aquitaine à la tour abolie :" +
  "Ma seule étoile est morte, - et mon luth constellé" +
  "Porte le soleil noir de la Mélancolie." +

  "Dans la nuit du tombeau, toi qui m'as consolé," +
  "Rends - moi le Pausilippe et la mer d'Italie," +
  "La fleur qui plaisait tant à mon cœur désolé," +
  "Et la treille où le pampre à la rose s'allie." +

  "Suis - je Amour ou Phébus ? ...Lusignan ou Biron ?" +
  "Mon front est rouge encor du baiser de la reine;" +
  "J'ai rêvé dans la grotte où nage la sirène..." +

  "Et j'ai deux fois vainqueur traversé l'Achéron;" +
  "Modulant tour à tour sur la lyre d'Orphée" +
  "Les soupirs de la sainte et les cris de la fée."

/*let countE = 0

//let nbe = 0

//console.log(`nbe: ${0}`)

for (let i = 0; i < msg.length; ++i) {
  if (msg[i] === 'e') {
    countE++
  }
}
console.log(`nb e: ${countE}`)
/*console.log(`Le nombre de "E" dans ce texte est de : ${msg.toUpperCase().match(/E/g).length}`)*/

let countE = 0

//console.log(trucChiantALire)

for (let i = 0; i < msg.length; i++) {
  if (msg[i] === 'e') {
    countE++
  }
}

console.log(`il y a ${countE} 'e' dans le texte très chiant à lire`)

