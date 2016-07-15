function createPhoneNumber(numbers){
  console.log(numbers);
  var phoneNumber = '';
  numbers.map(function(item,index){
    switch (index) {
      case 0:
        phoneNumber += '(' + item;
        break;
      case 1:
      case 2:
        phoneNumber += item;
        break;
      case 3:
         phoneNumber += ') ' + item;
         break;
      case 4:
      case 5:
         phoneNumber += item;
         break;
      case 6:
        phoneNumber += '-' + item;
        break;
      case 7:
      case 8:
      case 9:
        phoneNumber += item;
        break;
    }
  });
  console.log(phoneNumber);
  return phoneNumber;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);