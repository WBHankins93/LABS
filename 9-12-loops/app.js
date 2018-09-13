for (let i = 50; i >= 20; i--) {
  if(i % 3 === 0) {
    console.log(i);
  } }

// for (let h = 0; h < Infinity; h++) {}
// for (;;) {}

const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];

for (let k = 1; k < presidents.length; k++) {
  console.log(presidents[k]);
}

const menu = [
  {name: "pizza", glutenFree: false},
  {name: "salad", glutenFree: true},
  {name: "donut", glutenFree: false},
  {name: "steak", glutenFree: true},
  {name: "chicken", glutenFree: true},
  {name: "cheeseburger", glutenFree: false}];

let array = [];

for (let i = 0; i < menu.length; i++) {
  if(menu[i].glutenFree === true) {
    array.push(menu[i]);
  }
}
console.log(array);


const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]

// Put into a seperate array that pulls all non numbers
let array1 = [];

for(let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === 'string' || typeof mixedArray[i] === 'object') {
    array1.push(mixedArray[i]);
  }
}
console.log(array1);
