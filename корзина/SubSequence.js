function SubSequence(a){
  var now = 0,prev =0;
  for(var i = 0;i < a.length;i++){  
    prev = Math.max(0,prev + a[i]);
    now = Math.max(prev,now);
  }
  return now;
}

console.log(SubSequence([-1,-2,-3,4,6,7]));
console.log(SubSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

s.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});

