let msg =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

/*msg
  .trim()
  .toUpperCase()
  .split(' ')
  .forEach((elem) => console.log(`mot: ${elem}`))*/

sol = msg.trim().toUpperCase().split(' ')


for (let elem of sol)
  console.log(`mot : ${elem}`)

// apres 3h dessus copie de rom1 pour essayer de comprendre elem