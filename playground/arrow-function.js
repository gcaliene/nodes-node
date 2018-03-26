var square = (x) => {
  return x * x
};

var cube = (x) => x*x*x;

console.log(square(4));
console.log(cube(6));

var user = {
  name:'Andrew',
  sayHi: () => {
    // console.log(arguments);// we get the global arguments function
    console.log(`Hi. I'm ${this.name}`);// this doens't work with arrow functions
  },
  sayHiAlt(){
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi(); //this keyword doesn't work with arrow functions
user.sayHiAlt(1,2,3); //when creating functions on object literals this can be used to solve this problem


// NOTE: in general if you don't use this or the argument function then the arrow function will be fine.
