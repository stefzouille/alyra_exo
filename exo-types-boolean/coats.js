// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true
let isWindy = false

if (isRainy || isWindy) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}

let istemp = 18

if (istemp < 15) {
  console.log('Parceque ca caille grave')
} else if (istemp >= 25) {
  console.log(`Tu veux une glaces pour te rafraichir?`)
} else {
  console.log('Pas forcement mais le temps est encore frais')
}