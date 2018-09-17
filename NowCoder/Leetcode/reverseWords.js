/***
 * 
 * 
 * 
 */

 function ReverseSentence(str) {
     // write code here
     if (str == null || str == '') {
         return "";
     } else {
         return str.split(" ").reverse().join(" ")
     }
 }

 console.log('------------------------------------');
 console.log(ReverseSentence("student a am I"));
 console.log('------------------------------------');