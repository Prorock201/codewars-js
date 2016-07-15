function combineNames(...name){
  return name.join(' ');
}

function combineNames2() {
  return Array.prototype.join.call(arguments, " ");
}