var colour = '';
for (var i = 250; i > 0; i = i - 5) {
  colour = 'background-color: rgb(' + i + ',' + i + ',' + i + ')';
  console.log(colour);
  document.write('<div style="float: left;margin: 5px; width:90px;height:30px;' + colour+ '"></div>');
}