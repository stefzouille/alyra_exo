const isOdd = (nb) => {
 if (nb % 2 === 0) {
return false
 } else {
   return true
}

  
}
console.log(isOdd(20))

const isEven = (nb) => {
  if (!isOdd(nb)){
      return true
  } else{
    return false
  }
}
console.log(isEven(2))