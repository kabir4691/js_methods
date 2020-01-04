// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
console.log(Math.max.apply(null, numbers));

// Find longest string in strings
console.log(strings.reduce(function(final, current) { 
  return final.length > current.length ? final : current;
}));

// Find all the even numbers
console.log(numbers.filter(number => number % 2 == 0));

// Find all the odd numbers
console.log(numbers.filter(number => number % 2 == 1));

// Find all the words that contain 'is' use string method 'includes'
console.log(strings.filter(string => string.includes("is")));

// Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.filter(string => string.indexOf("is") != -1));

// Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every(function(number) { 
  return number % 3 == 0;
}))

//  Sort Array from smallest to largest
console.log(numbers.sort(function (a, b) { 
  return a - b;
}));

// Remove the last word in strings
console.log(strings.slice(0, strings.length - 1));

// Add a new word in the array
strings.push("new");
console.log(strings);

// Remove the first word in the array
strings.shift();
console.log(strings);

// Place a new word at the start of the array use (upshift)
strings.unshift("this");
console.log(strings);

// Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));

// Make a subset of strings array ['a','collection']
console.log(strings.slice(2, 4));

// Replace 12 & 18 with 1221 and 1881
console.log(numbers.map(number => { 
  if (number === 12) {
		return 1221;
  }
  if (number === 18) {
		return 1881;
  }
  return number;
}));

// Replace words with string in strings array
console.log(
	strings.map(string => {
		if (string === "words") {
			return "string";
		}
		return string;
	})
);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
let customersStartingWithJ = customers.filter(customer => { 
  return customer.firstname.startsWith("J");
});

// Create new array with firstname and lastname
let customerNames = [];
customersStartingWithJ.forEach(customer => {
	customerNames.push(`${customer.firstname} ${customer.lastname}`);
});

// Sort the array created above alphabetically
customerNames.sort();
console.log(customerNames);
