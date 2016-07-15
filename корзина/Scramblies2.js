function scramble(str1, str2) {
 var arr1 = str1.split("").sort();
 var arr2 = str2.split("").sort();
 var j = 0;
 for (var i =0; i < arr1.length; i++){
   if (arr1[i] === arr2[j]){
     j++;
     if (j === arr2.length) return true;
   }
   else if (arr1[i] > arr2[j]) return false;
 }
 return j === arr2.length;
}

console.log(scramble('cedewaraaossoqqyt','codewars'));