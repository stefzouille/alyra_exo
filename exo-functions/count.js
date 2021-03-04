
//  const count = (min,step ,max) => {
//   for (; min < max; min += step) {
// console.log(min)
//   }
// }
 
// count(5, 10, 100)


const count = (min, max, step) => {
  for (let i = min; i <= max; i += step)
  console.log(i)
}

count(0, 20, 2)
count(1, 11, 3)