//Ecrire une fonction convertMiToKm qui fait la conversion 
//d'une distance exprimée en Milles, en Kilomètres. 1 Mille est à égal à 1.60934 Kilomètres.

const RATIO =  1.60934

const convertMiToKm = (dist) => {
 return  RATIO * dist
}
 


console.log(convertMiToKm(10))