/*let age = 17

let canVote = false

if (age >= 18) {

  canVote = true

} else {


  canVote = false
}

if (canVote) {
  console.log('You can vote')

} else {
  console.log('You can not vote')
}*/


let age = 18

let canVote = age >= 18 ? true : false;
if (canVote) {
  console.log(`${canVote ? 'You can vote' : 'You can not vote'}`)
}
// let age = 18
// let canVote = age >= 18 ? 1 : 2
// console.log(canVote)
// console.log(`${age} you can ${canVote ? '' : 'not '}vote`)




