//Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé. 
//Si le paramètre passé est 'Hello!' la fonction devra retourné 

  
 function reverseString(str) {
    return str.split('').reverse().join("")  //reverse ne fonctionne que sur un tableau
}

const isPalindrome = (str) => {
    if (reverseString(str) === str ) {
        return true
     } else {
            return false
        }
    
}

console.log(reverseString("hello!"))
console.log(isPalindrome('radar'))