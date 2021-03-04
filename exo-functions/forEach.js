const convertMiToKm = (dist) => {
 return 1.60934 * dist
 }

 
 const forEach = (tab, fct) => {
   let nwtab = []
   tab.forEach(elem => {
     nwtab.push(fct(elem))
  });
  return nwtab
}


console.log(forEach([1, 2, 3, 4],convertMiToKm))

