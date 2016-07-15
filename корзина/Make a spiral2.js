function spiralize(size) {
  if(size === 0) return [] ;
  if(size === 1) return [[1]] ;
  if(size === 2) return [[1,1],[0,1]] ;
  if(size === 3) return [[1,1,1],[0,0,1],[1,1,1]] ;
  var base = spiralize(size-4) ;
  var l0 = blank(size).map(function(a) { return 1 ;}) ;
  var l1 = blank(size).map(function(a,i) { return +(i===size-1) ;}) ;
  var l2 = blank(size).map(function(a,i) { return +(i===size-1 || i===0) ;}) ;
  base = base.map(function(a,i) {
    return i == 0 ? 
      [].concat.apply([],[[1,1],a,[0,1]]) :
      [].concat.apply([],[[1,0],a,[0,1]]) ;
  }) ;
  return [].concat.apply([],[[l0,l1],base,[l2,l0]]) ;
}

function blank(size) {
  return Array.apply(null, new Array(size)) ;
}

console.log(spiralize(10));