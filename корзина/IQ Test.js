function iqTest(numbers){
  console.log(numbers);
  var odd = {};
  var even = {};
  var test = {odd};
  var numberArray = numbers.split(' ');
  for (var i=0;i<numberArray.length;++i) {
    if(numberArray[i]%2 == 0) {
      indexEven = i+1;
      even.push(numberArray[i]);
    } else {
      indexOdd = i+1;
      odd.push(numberArray[i]);
    }
  }
  return odd.length<even.length?indexOdd:indexEven;
}

console.log(iqTest("1 2 2"));