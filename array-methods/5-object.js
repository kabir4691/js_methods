// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
function listPropAndValsOfObject(object) { 
  for (key of Object.keys(object)) { 
    console.log(`${key}: ${object[key]}`);
  }
}




// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

console.log(listPropAndValsOfObject(student));
delete student.rollno;
console.log(listPropAndValsOfObject(student));


// 3. Write a function to get the length of an object.
function getObjectLength(object) { 
  return Object.keys(object).length;
}