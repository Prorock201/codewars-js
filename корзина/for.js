function scoreThrows(radiuses){
  console.log(radiuses);
  var score = 0;
  radiuses.map(function(item,index){
    if (item < 5 && item >= 0) {
      score += 10;
    } else if (item <= 10 && item >= 5) {
      score += 5;
    }
  });
  if (score / radiuses.length == 10) {
    score += 100;
  }
  console.log(score);
  return score;
}

scoreThrows([ 0, 5, 10, 10.5, 4.5 ]);