var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
var len = 25;

var justify = function(str, len) {
  var words = str.split(' ');
  var output = [];
  while (words.length){
    // Collect as many words as possible for the current line
    var lineWords = [];      
    while (words.length>0 && (lineWords+','+words[0]).length <= len)
      lineWords.push(words.shift());

    if (words.length){  // No last line, so justify it
     // Compute the holes between the words
     var spaces = len - (''+lineWords).length;
     for (var i=0; i<spaces; i++)
       lineWords[i % (lineWords.length-1)] += ' ';
    }

    // Build the line
    output.push(lineWords.join(' '));
  }

  return output.join('\n');
};

console.log(justify(str, len));