/*snail = function(array) {
 var result = [];
 var n=array.length;
 var x=n;
 var y=n;
 if(n==1){
     return array[0];
 }
 while(y>1){
     for(j=0;j<y;j++){
         result.push(array[0][j]);
     }
     array.splice(0,1);
     y--;
     for(j=0;j<y;j++){
         result.push(array[j][y]);
         array[j].splice(y);
     }
     x--;
     for(j=x-1;j>=0;j--){
         result.push(array[y-1][j]);
     }
     array.splice(y-1);
     x--;
     for(j=y-1;j>0;j--){
         result.push(array[j-1][0]);
         array[j-1].splice(0,1);
     }
     y--;
     if(y==1&&x==1){
        result.push(array[0][0]);
 }
 }
 return result;
}*/
/*array = [[1,2,3],
         [8,9,4],
         [7,6,5]]*/

array=[[1,2,3,4],
       [5,6,7,8],
       [9,10,11,12],
       [13,14,15,16]];

function snail(array) {
  var result = [];
  var len = array.length;
  var x = len;
  var y = len;
  if (len == 1) {
    return array[0];
  }
  while (len > 2) {
    for (var i=0;i<y;++i){
      result.push(array[0][i]);
    };
    array.splice(0,1);
    y--;
    for (var i=0;i<y;++i){
      result.push(array[i][y]);
      array[i].splice([y],1);
    };
    x--;
    for (var i=x;i>0;--i){
      result.push(array[x-1][i-1]);
    };
    array.splice(y-1,1);
    y--;
    for (var i=y;i>0;--i){
      result.push(array[i-1][0]);
      array[i-1].splice(0,1);
    };
    x--;
    if (y==1&&x==1){
      result.push(array[0][0]);
    };
  };
  return result;
}

console.log(snail(array));
