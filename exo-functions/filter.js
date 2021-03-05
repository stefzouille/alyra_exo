

// const bug = (word) => {
//   if ( word.length >= 6){
//     return true
//   } else {
//     return false
//   }
// }
// const filter = (tab, fct) => {
//   let newArray = []
//   for ( let i = 0; i < tab.length; i++){
//     if (fct(tab[i])) {
//         newArray.push(tab[i])
//     }
//   }
// return newArray
// }
// console.log(filter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], bug))

isEven = (number) => {
    return number % 2 === 0 ? true : false
}
const filter = (func, array) => {
    const filteredTab = []
    for (const elem of array) {
        if (func(elem)) {
            filteredTab.push(elem)
        } 
    }
    return filteredTab
}
numbers = [12, 1, 43, 3, 8, 9, 22, 6, 19, 88, 76]


//let newTab = numbers.filter(isEven)
//console.log(newTab)
console.log(filter(isEven, numbers))