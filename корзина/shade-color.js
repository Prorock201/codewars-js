/*var Barray = 300;*/

/*function shadesOfGrey(n){
  var array = [];
  var color = '#';
  if (n<=0) {
   array = [];
  } else if (n<254) {
    getArray();
  } else {
    n = 254;
    getArray();
  }
  function getArray() {
    do {
      var n16 = n.toString(16);
       if ((n16.toString().length)<2) {
        n16 = '0' + n16;
      }
      for (var i=0;i<3;++i) {
       color += n16;
      }  
      array.unshift(color);
      n -= 1;
      color = '#';
    } while (n > 0);
  }
  return array;
}*/

/*function shadesOfGrey(n) {
  var shades = [];
  for (var i = 1; i <= Math.min(n, 254); i++) {
    var grey = ('0' + i.toString(16)).slice(-2);
    shades.push('#' + grey + grey + grey);
  }
  console.log(shades);
  return shades;
}

shadesOfGrey(Barray);*/

/*  array.sort(function(a, b) {
    return a - b;
  })*/
/*function shadesOfGrey(n){
	var newArray = [];
	n.map(function(item, i){
		newArray.push(item.substr(1));
		console.log(item.substr(1));
		item.substr(1).
	})*/
/*	newArray.map(function(item, i){

});*/
  /*var array = [];
  var color = '';
  for (var i=0;i<3;++i) {
    array.push(n.toString(16));
  }
  console.log(array);
  color = '#' + array.join('');
  console.log(color);*/
/*}
shadesOfGrey(Barray);

function shadesOfGrey(n){
  var array = [];
  var color = '';
  for (var i=0;i<3;++i) {
    array.push(n.toString(16));
  }
  color = '#' + array.join('');
}

return color = '#' + array.join('');*/

/*function accum(s) {
  return s.split('').map(function(item,index) {
    item.toUpperCase() + Array(index+1).join(item.toLowerCase());
  }).join('-');
}
*/
/*function accum(s) {
  return s.split('').map(function(item, index){
    return item.toUpperCase() + Array(index + 1).join(item.toLowerCase())}).join('-');
}

accum("abcd");*/

/*function accum(s) {
  return s.split('').map(function(item, index){
    item.toUpperCase() + Array(index + 1).join(item.toLowerCase());
  }).join('-');
}*/

/*function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}*/

/*function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}*/

/*function chained(functions) {
  console.log(functions);
  functions.map(function(item, index){
    console.log(item);
    return item;
  })
}

function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

function f4(x){ return x.split("").concat().reverse().join("").split(" ")}
function f5(xs){ return xs.concat().reverse() }
function f6(xs){ return xs.join("_") }

chained([f1,f2,f3]);*/

function multiplicationTable(row,col){
  var newRow = [];
  var newArray = [];
  for (var i = 1; i <= row; ++i) {
    for (var j = 1; j <= col; ++j) {
      newRow.push(j*i);
    }
    newArray.push(newRow);
    newRow = [];
  }
  return newArray;
}

multiplicationTable(3,4) // [[1,2,3,4],[2,4,6,8],[3,6,9,12]])

()
Test Passed

1,2
2-1=true

({})
Test Passed

1,4 >>> 4-1=3 >>> true
2,3 >>> 3-2=1 >>> true
3-1=2 >>> 2 >>> true

({)}
Test Passed

1,3 >>> 3-1=2 >>> true
2,4 >>> 4-2=2 >>> true
2-2=0 >>> false


[[]()]
Test Passed

-1-2+3+6=6
-4+5=1
6-1=5 true

[[](])
Test Passed


-1-2+3+5=5
-4+6=2
5-2=3 true



[{()}]
Test Passed
([])
Test Passed
{}([])
Test Passed