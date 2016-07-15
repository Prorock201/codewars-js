var number = function(busStops){
  return busStops.reduce(function(prev,current){
    return prev += (current[0]-current[1]);
  },0);
}