const welcomeString = (name, nb) => {
  return `Hello ${name}, welcome to the Javascript class, you are user number ${nb}!`
}

const sayHelloToAll = (names) => {
  for (let i = 0; i < names.length; ++i) {
    console.log(welcomeString(names[i], i + 1))
  }
}

const names = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eve']


console.log('Start of program.')
sayHelloToAll(names)
console.log('End of program.')