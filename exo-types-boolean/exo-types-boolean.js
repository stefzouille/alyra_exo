let res1 = (true && false) || (false && true)
let res2 = 10 > 11 && 11 > 10
let res3 = (true || false) && true
let res4 = (!true && !false) || (!false && !false)
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
let res6 = (!(20 >= 20) && 7 === 7) || true
let res7 = '1' === 1 && '2' == 2 && '3' === 3
let res8 = !res7
let res9 = !res8
let res10 =


  console.log(`res1 = ${res1}`)  // false || false = false
console.log(`res2 = ${res2}`)    // false && true  = false
console.log(`res3 = ${res3}`)    // true  ||  true = true
console.log(`res4 = ${res4}`)    // false || true  = true
console.log(`res4 = ${res4}`)    // false && true  = false
console.log(`res5 = ${res5}`)    // true  && false = false
console.log(`res6 = ${res6}`)    // false || true  = true
console.log(`res7 = ${res7}`)    // false && false = false
console.log(`res8 = ${res8}`)    // true
console.log(`res9 = ${res9}`)    // false
console.log(`res10 = ${res10}`)    // undefined c est un piége...

console.log(res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
      //       false      ||     true       ||      false     ||       false
      //                                  true
