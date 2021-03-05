//Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.
// returns 101



const biggest = (tab) => {
  let result = tab[0]
  for ( i = 0; i < tab.length; i++){
    if (tab[i] >= result){
      result = tab[i]
    }
  } 
  return result
}

const sortAscend = (tab) => {
  return tab.sort((a, b) => {return a - b})  //le {return  ....} pas obligé a la fin
} 

const makeUnique = (nbs) => {
  return sortAscend (nbs.filter((item, index) => nbs.indexOf(item) === index))
}



console.log(biggest([99, 100, 101, 1]))
console.log(sortAscend([99, 100, 101, 1]))
console.log(makeUnique([1, 2, 8, 1, 3, 2, 4, 5, 7, 5, 1]))