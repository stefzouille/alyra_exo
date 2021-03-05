

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

let filter = (func, array) => {
    let virginTab = []
    for (let i = 0; i < array.length; i++) {
        func(array[i]) ? virginTab.push(array[i]) : ''
    }
    return virginTab
}


numbers = [12, 1, 43, 3, 8, 9, 22, 6, 19, 88, 76]

console.log(filter(isEven, numbers))