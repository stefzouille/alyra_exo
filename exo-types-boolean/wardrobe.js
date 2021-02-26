//un programme qui affichera un message contenant tous les vêtements et accessoires 
//que vous devrez porter en fonction des données méteo.

let isRainy = true
let isWindy = true
let istornado = false
let temperature = 10
let clothes = ''


while (!istornado) {

  if (isRainy) {
    clothes += 'parapluie et kaway , ' // concatenation de string
  }

  if (isWindy) {
    clothes += 'casquette a l envers, '
  }

  if (temperature < 12) {
    clothes += 'une doudoune vite, '
  } else if (temperature >= 12 && temperature <= 19) {
    clothes += 'sweat mais ca caille quand meme, '
  } else if (temperature >= 19 && temperature <= 30) {
    clothes += 'debardeur , meme sous la pluie '
  } else if (temperature >= 30 && temperature <= 50) {
    clothes += 'and absoluly nothing,exept our kniff '
  } else {
    clothes += 't-shirt, '
  }
  console.log(`Je vous recommande de porter: ${clothes}`)
  break
}

while (istornado) {
  console.log('Arlet meteo ! c est pas le moment de sortir de la maison a par avec une ancre attaché a son pantalon!')
  break
}