var spiralize = function(size) {
  console.log(size);
  var result = [];
  var x = size;
  var y = size;
  var lap = 0;
  var space = 0;
  for (var i=0;i<size;i++){
    result[i] = [];
    for (var j=0;j<size;j++){
      result[i][j] = 0;
    }
  }
  while (x!=1&&y!=1) {
    for (var i=0;i<y;++i){
      result[lap+space][i+lap] = 1;
    };
    y--;
    for (var i=0;i<y-space;++i){
      result[i+1+space+lap][y+lap] = 1;
    };
    x--;
    for (var i=x;i>0+space+space;--i){
      result[x+lap-space][i-1+lap-space] = 1;
    };
    y--;
    space = 1;
    for (var i=y;i>0+space+lap;--i){
      result[i+lap][0+lap] = 1;
    };
    x--;
    y -= space;
    lap++;
  };
  return result;
}

console.log(spiralize(10));