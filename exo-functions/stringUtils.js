//Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé. 
//Si le paramètre passé est 'Hello!' la fonction devra retourné 

  
 function reverseString(str) {
    return str.split('').reverse().join("")
}
console.log(reverseString("hello!"))