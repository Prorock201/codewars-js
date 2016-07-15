var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
var len = 30;

var justify = function(str, len) {
  var array = str.split(' ');
  var newArrayOfRow = []; 
  var row = [];
  var text = [];
  array.reduce(function(previousValue, currentValue, index, array){
    if ((previousValue + currentValue).length + 1 <= len) {
      row = previousValue + ' ' + currentValue;
    } else {
      newArrayOfRow.push(row.split(' '));
      row = currentValue;
    }
    if (index == array.length - 1) {
      newArrayOfRow.push(row.split(' '));
    }
    return row;
  });
  newArrayOfRow.forEach(function(item,index){
    var spaces = len - item.join(' ').length;
    if (index != newArrayOfRow.length - 1) {
      for (var i=0;i<spaces;++i) {
        item[i % (item.length-1)] += ' ';
      }
    } 
    text.push(item.join(' '));
  });
  return text.join('\n');
};

console.log(justify(str, len));

/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
/*var justify = function(str, len) {
  var array = str.split(' ');
  var newArrayOfRow = []; 
  var row = [];
  array.reduce(function(previousValue, currentValue, index, array){
    if ((previousValue + currentValue).length + 1 < len) {
      if(previousValue) {
        return row = previousValue + ' ' + currentValue;
      } else {
        return row = currentValue;
      }
    } else {
      newArrayOfRow.push(row.split(' '));
      return row = '';
    }
  });
  
  console.log(newArrayOfRow);
};*/

function loop_size(node){
  var nodes = [], n = node;
  
  while (nodes.indexOf(n) === -1) {
    nodes.push(n);
    n = n.getNext();
  }
  
  return nodes.length - nodes.indexOf(n);
}