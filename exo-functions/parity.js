const isOdd = (nb) => {
 /*if (nb % 2 === 0) {
return false
 } else {
   return true
}*/
 return nb % 2 !== 0 ? true : false     //possible utiliser ternarie ou pas 
  
}
console.log(isOdd(20))

const isEven = (nb) => {
  return !isOdd(nb)
  }
console.log(isEven(2))