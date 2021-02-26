let text = 'Je suis le Ténébreux, – le Veuf, – l’Inconsolé,\n\
Le Prince d’Aquitaine à la Tour abolie: \n\
Ma seule Etoile est morte, – et mon luth constellé\n\
Porte le Soleil noir de la Mélancolie.\n\
\n\
Dans la nuit du Tombeau, Toi qui m’as consolé, \n\
Rends - moi le Pausilippe et la mer d’Italie, \n\
La fleur qui plaisait tant à mon coeur désolé, \n\
Et la treille où le Pampre à la Rose s’allie.\n\
\n\
Suis - je Amour ou Phébus ?… Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la Reine; \n\
J’ai rêvé dans la Grotte où nage la sirène…\n\
\n\
Et j’ai deux fois vainqueur traversé l’Achéron: \n\
Modulant tour à tour sur la lyre d’Orphée\n\
Les soupirs de la Sainte et les cris de la Fée.'


/*let msgSplit = msg.split(' ')
let count = 0

for (let i = 0; i < msg.length; ++i) {


  if (msgSplit[i]) {
    count++
  }
}

console.log(`il y a : ${count}`)



console.log(msg.split(' '))*/

// correction

text = text.replaceAll('\n', ' ')
let tab = text.split(' ')
console.log(`Le nombre de mot est ${tab.length}.`)





