Bomb.diffuse(42);

for (var i=0;i<5;++i){
  Bomb.diffuse();
};

Bomb.diffuse(global.BombKey);
console.log(Bomb.diffuse.toString());
console.log(Bomb);

global.diffuseTheBomb = function(){
  return true;
};

Bomb.diffuse();
console.log(Bomb.diffuse.toString());
console.log(Bomb);

Bomb.diffuse(3.14159);
console.log(Bomb.diffuse.toString());
console.log(Bomb);

Bomb.diffuse('23.12.2011');
console.log(Bomb.diffuse.toString());
console.log(Bomb);

var code = Object.freeze({key:43});
Bomb.diffuse(code);
console.log(Bomb.diffuse.toString());
console.log(Bomb);

var obj = {
  value: 6,
  get getValue(){
    return this.value +=3;
  }
};
obj.valueOf = function (){return this.getValue};
Bomb.diffuse(obj);
console.log(Bomb.diffuse.toString());
console.log(Bomb);


Bomb.diffuse();
console.log(Bomb.diffuse.toString());
console.log(Bomb);