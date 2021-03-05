const add = (nb1, nb2) => {
  return nb1 + nb2
}
//console.log(add(10, 2))



const sub = (nb1, nb2) => {
  return nb1 - nb2
}
//console.log(sub(10, 2))



const mul = (nb1, nb2) => {
  return nb1 * nb2
}
//console.log(mul(10, 2))



const div = (nb1, nb2) => {
  return nb1 / nb2
}
//console.log(div(10, 2))

const calc = (op, nb1, nb2) => {
  switch (op) {
    case '+': return add(nb1, nb2)
    break
    case '-': return sub(nb1, nb2)
    break
    case '*': return mul(nb1, nb2) 
    break
    case '/': return div(nb1, nb2)
    break
    default:
      return 'operateur non reconnu,veuillez recommencer svp.'

  }

}

console.log(calc('%', 5, 5))