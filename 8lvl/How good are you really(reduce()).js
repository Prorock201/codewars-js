function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce(function(prev,curr){
    return prev + curr;
  }, 0) / classPoints.length;
}
