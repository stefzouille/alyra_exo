const countWheels = (a, b, c, d) => {
  return a + b*2 + c*4 + d*6 
}






//countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine)
console.log(countWheels(10, 20, 7, 2))
console.log(`nombres de roues total : ${countWheels(2, 3, 4, 5)}`)