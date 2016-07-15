function tea42(input) {
  var array = input.toString().split('');
  array.map(function(item, i) {
  	if (item[i] == '2') {
      item[i] = 't';
    }
  });
  /*for (var i=0;i<array.lengrh;++i) {
    if (array[i] == '2') {
      array[i] = 't';
    }
  }*/
  return array.join('');
  console.log(array);
};

tea42('coffee') //should return 'coffee'
tea42('tea') //should return 'tea'
tea42('2ea') //should return 'tea'
tea42(9022) //should return '90tt'
tea42(5676765) //should return '5676765'
tea42('2u2u') //should return 'tutu'