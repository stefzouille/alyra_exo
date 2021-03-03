//Ecrire une fonction convertMiToKm qui fait la conversion 
//d'une distance exprimée en Milles, en Kilomètres. 1 Mille est à égal à 1.60934 Kilomètres.


const convertMiToKm = (dist) => {
 let distance = 1.60934 * dist
 return distance
}
 


console.log(convertMiToKm(10))