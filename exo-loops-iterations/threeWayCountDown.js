//Ecrire avec 3 boucles différentes, un décompte de 101 à 1 en décomptant de 2 en 2: L'affichage attendu:

// 101
// 99
// 97
// 95
// ....
// 5
// 3
// 1

let nb = 101

while (nb > 0){
  console.log(nb)
  nb -= 2
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

let nb1 = 101
do{
  console.log(nb1)
  nb1 -= 2
}while(nb1 >0)

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')


for (let i = 101; i > 0; i -= 2) {
if (i % 2 === 0) {

}
console.log(i)
}

