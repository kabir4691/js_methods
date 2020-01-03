var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
let sum = 0;
for (item of data) {
  if (item.type === "dog") {
   sum += item.age * 7; 
  }
}
console.log(sum);

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.
console.log(data.filter(item => {
  return item.type === "dog";
})
  .map(item => {
    item.age *= 7;
    return item;
})
  .reduce(function (previous, current) {
  previous += current.age;
  return previous;
  }, 0)
);

// Solution 105
