//Ecrivez un programme qui affiche la somme de tous les nombres présents dans ce tableau (qui contient des tableaux)

let tab = [
  [1, 2, 3],         //6
  [4, -5, 7],        //6
  [-3, -6],          //-9
  [10, -13],          //-3
]

 let c0 = tab[0][0] + tab[0][1] + tab[0][2]
 let c1 = tab[1][0] + tab[1][1] + tab[1][2]
 let c2 = -tab[2][0] + tab[2][1] 
 let c3 = tab[2][0] + tab[2][1] 
                                  //c0 + c1 = 12
 let sum = c0 + c1 + c2 + c3      //c2 + c3 = -12
               

console.log(sum)



// let a = [1, 2, 3]
// let b = a[2] * 3 + 4 / 2


// for (let i = 0; i < tab.length; ++i) {
//   console.log(`Array ${i + 1}:`)
//   for (let j = 0; j < tab[i].length; ++j) {
//     console.log(`\t${tab[i][j]}`)
  
//   }
// }