(function(global) {
  "use strict";
  var MySingletonClass = function() {

    if ( MySingletonClass.prototype._singletonInstance ) {
      return MySingletonClass.prototype._singletonInstance;
    }
    MySingletonClass.prototype._singletonInstance = this;

    this.Foo = function() {
      // ...
    };
  };

var a = new MySingletonClass();
var b = MySingletonClass();
console.log(a);
console.log(b);
console.log(a === b);
//a === b
global.MySingleton = a; //or b

}(window));

var Singleton = function(){
  if(Singleton.__instance) {
    return Singleton.__instance;
  }
  
  Singleton.__instance = this;
};

var a = new Singleton();
var b = Singleton();

a === b //true