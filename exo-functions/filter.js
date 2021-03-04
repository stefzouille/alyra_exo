//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

//console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


//  const filter = (words, fct, []) => {
//    const newArray = []
//     for (const elem of words) {
//     newArray.push(fct(elem))                         //fct is not a function !
//         }
//    result = words.filter(word => word.length > 6)  
//       return result = words.filter(fct(newArray[tab]))
   
//   }
//   console.log(filter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))

  
// I dry like a piece of wood in the oven

const bug = (word) => {
  if ( word.length >= 6){
    return true
  } else {
    return false
  }

}

const filter = (tab, fct) => {
  let newArray = []
  for ( let i = 0; i < tab.length; i++){
    if (fct(tab[i])) {
        newArray.push(tab[i])
    }
  }
return newArray
}
console.log(filter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], bug))

//console.log(filter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))