function josephusSurvivor(n,k){
  var man = 1;
  for (var i=1;i<=n;++i){
    man=(man+k-1)%i+1;
  }
  return man;
}



/*function josephusSurvivor (n,k) {
    var people = [];
    for (var i=0; i<n; ++i) {
        people[i] = i+1;
    };
    console.log(people);
    var idx = 0;
    var len = people.length;
    while (people.length > 1) {
        idx = (idx + k-1) % people.length;
        people.splice(idx, 1);
    }
    return parseInt(people.join(''));
}*/

console.log(josephusSurvivor(11,19));

  if (url.indexOf("www.") == 0) {
    return url = url.substr(4).split('.')[0];
  } else {
    return url.match(/:\/\/(.[^/]+)/)[1].split('.')[0];
  }