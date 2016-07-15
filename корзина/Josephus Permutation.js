/*function josephus(items,k){
  console.log(items);
  console.log(k);
  var newArray = [];
  var pos = 0;
  var del = 0;
  var itemsLength = items.length;
  for (var i =1;i<=itemsLength;++i){
    pos = i*k-del;
    pos = pos>items.length?pos-items.length-1:pos-1;
    newArray.push(items[pos]);
    items.splice(pos,1);
    console.log(items);
    ++del;
  }
  console.log(newArray);
  return newArray;
}*/

/*function josephus(items,k){
  console.log(items);
  console.log(k);
  var newArray = [];
  var itemsLength = items.length;
  var i = 0;
  while (newArray.length < itemsLength) {
    idx = (idx + k) % len;
    deaths.push(people[idx]);
    people.splice(idx, 1);
  };
  console.log(newArray);
  return newArray;
}*/

function josephus (items,k) {
    var newArray = [];
    var idx = -1;
    var len = newArray.length;
    while (len = items.length) {
        idx = (idx + k) % len;
        newArray.push(items[idx]);
        items.splice(idx, 1);
        idx--;
    }
    return newArray;
}

console.log(josephus([1,2,3,4,5,6,7,8,9,10],2));

