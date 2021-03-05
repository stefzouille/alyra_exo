const NB_WHEELS_CYCLE = 1
const NB_WHEELS_MOTO = 2
const NB_WHEELS_car = 3
const NB_WHEELS_LIM = 4

const countWheels = (a, b, c, d) => {
  return a * NB_WHEELS_CYCLE + b * NB_WHEELS_MOTO + c * NB_WHEELS_car + d * NB_WHEELS_LIM 
}


//countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine)
console.log(countWheels(10, 20, 7, 2))
console.log(`nombres de roues total : ${countWheels(2, 3, 4, 5)}`)