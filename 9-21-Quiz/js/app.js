// Create an object that has a property
// that is an array. Log one of the
// elements of that array.

const oneObj = {
  pets: [1,2]
};

console.log(oneObj.pets[0]);

//Create an object that has a property that is an object. Log one of the
//properties of that inner object.
const objTwo = {
  birds: {falcon: true}
}
console.log(objTwo.birds.falcon);

//Create an object that has a property that is a function (method). Call
//that method
  const objThree = {
    sing () {
    console.log('hello')
  }
};
objThree.sing();


//Create a function that returns an object. Log a property of that object
//(hint: call the function and then call a property on the return value).

const instrument = () => {
  const music = {guitar: 'string'};
  return music.guitar
};
console.log(instrument());


//Create a function that returns an array. Log an element of the array.

const milkyWay = () => {
  const planets = ['humans', 'plants', 'animals']
  return planets;
}
console.log(milkyWay()[0]);

//Create a function that returns an object that has an array. Log one of //the elements of that array.

const something = () => {
  const nothing = {obj1: [1,2,3]}
  return nothing;
}
console.log(something().obj1[1]);
