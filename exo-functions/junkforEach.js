const convertMiToKm = (dist) => {
 return 1.60934 * dist
 }

const forEach = (tab, fct) => {
   let nwtab = []
   for ( i = 0; i < nwtab.length; i++) {
          nwtab.push(fct(tab[i]))
  }    
   }
  

   console.log(forEach([1, 2, 3, 4],convertMiToKm))       //not good why ??