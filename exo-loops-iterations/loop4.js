//Avec une boucle for-of afficher les éléments du tableau suivant, ligne par ligne:

let tab = ['Js', 'Solidity', 'Html', 'Css', 'Python', 'Java', 'C++', 'Rust']


// for (const elem of tab) {    // variable elem  de tab 
//   console.log(elem)        // affiche la variable elem
// }


for (const [index ,elem] of tab.entries()) {   //retourne un index a chacun des elements ds boucle for
  console.log(`${elem} is index at ${index}`)       
}