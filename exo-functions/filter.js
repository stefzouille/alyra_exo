//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

//console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


 const filter = (words, fct, tab) => {
   const newArray = []
    for (const elem of words) {
    newArray.push(fct(elem))
    return newArray
    }
   result = words.filter(word => word.length > 6)  
      return result = words.filter(fct(newArray[tab]))
   
  }
  console.log(filter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))

  
// I dry like a piece of wood in the oven