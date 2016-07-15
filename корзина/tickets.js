function tickets(peopleInLine){
  console.log(peopleInLine);
  var cashbox = [0,0,0];
  var haveChange = 'YES';
  peopleInLine.map(function(item, index){
    switch(item){
      case 25:
        ++cashbox[0];
        break;
      case 50:
        --cashbox[0];
        ++cashbox[1];
        break;
      case 100:
        cashbox[1]?(--cashbox[1],--cashbox[0],++cashbox[2]):(cashbox[0] -= 3, ++cashbox[2]);
        break;
    };
    if ((cashbox[0] || cashbox[1]) < 0) {
      haveChange = 'NO';
      return haveChange;
    }
  });
  return haveChange;
}

return /(((?=.*[a-z]).{1,}(?=.*[A-Z]).{1,}).{6,20})/.test(password);
return /(?=.*[a-zA-Z0-9].{6,})/.test(password);

console.log(tickets([25, 25, 50, 100, 100]));