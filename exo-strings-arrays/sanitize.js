//la string suivante est difficilement lisible:

let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '


/*const tooMuchWhitespace = str.trim()


console.log(tooMuchWhitespace);*/

//attention regex ne pas utiliser   correction ms rien compris

const trimmed = str.trim()

const newString = trimmed.replace(
  /AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE/gi,
  `Alice et Bob essayent de communiquer secrètement, mais Eve veille.`
);
console.log(newString);






