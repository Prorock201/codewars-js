function accum(s) {
	var array = s.split('');
	var newArray = "";
  var longArray = array.map(function(item, i){
  	newArray += item.toUpperCase();
  	for (var j=0; j<i; ++j) {
  		newArray += item.toLowerCase();
  	}
  	if (i+1<array.length) {
  		newArray += '-';
  	}
    return newArray;
  });
  return newArray;
}

//Leo-RASPAUD
/*function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}*/

//Katbow
/*function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}*/

//arifhp86
/*function accum(str) {
  var res = [];
  for(var i = 0; i < str.length; i++) {
    var row = '';
    for(var j = 0; j < i + 1; j++) {
      row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
    }
    res.push(row);
  }
  return res.join('-');
}*/

console.log(accum("ZpglnRxqenU"));