function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  eat: function(){},
  describe: function(){ console.log('ss')},
  numLegs: 2, 
};
let a = new Dog;
a.describe()