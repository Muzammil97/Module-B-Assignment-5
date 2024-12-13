// Global Scope  
// Question-1

var varKeyword = "variable";
let letKeyword = "let";
const constKeyword = "const";

console.log(varKeyword);
console.log(letKeyword);
console.log(constKeyword);

// Function Scope 
// Question-2

function varDecalaration() {
  var varKeyword1 = "variable";
  let letKeyword1 = "let";
  const constKeyword1 = "const";
}

// console.log(varKeyword1); // varKeyword1 is not defined
// console.log(letKeyword1); //letKeyword1 is not defined
// console.log(constKeyword1); //constKeyword1 is not defined

// Block Scope: Q3
// Question-3

if(true){
    var varKeyword2 = "variable";
    let letKeyword2 = "let";
    const constKeyword2 = "const";
}
console.log(varKeyword2); 
// console.log(letKeyword2); //letKeyword2 is not defined
// console.log(constKeyword2); //constKeyword2 is not defined


// Hoisting with var: 
// Question-4

console.log(varHoisting) // undefined
var varHoisting = 'varHoisting'  

// Hoisting with let and const: 
// Question-5

// console.log(letHoisting) // undefined
// let letHoisting = 'letHoisting'  


// console.log(constHoisting) // undefined
// const constHoisting = 'constHoisting'  

// Re-declaration: 
// Question-6

var varDeclareTwice
var varDeclareTwice
// var declared without any error

// let letDeclareTwice
// let letDeclareTwice
// let cant be declared twice

// const constDeclareTwice
// const constDeclareTwice
// //  const cant be declared twice
 
// Re-Assignment:
// Question-7

var varReAssign = 'varReAssign'
varReAssign = 'varReAssign1'
// var assign without any error

let letReAssign = 'letReAssign'
letReAssign = 'letReAssign1'
// let assign without any error


// const constReAssign = 'constReAssign'
// constReAssign = 'constReAssign1'
// invalid assignment to const 'constReAssign'


// Temporal Dead Zone (TDZ) 
// Question-8


// {
//     console.log(tdzLet); // Error: Cannot access 'tdzLet' before initialization
//     let tdzLet = "TDZ example";

//     console.log(tdzConst); // Error: Cannot access 'tdzConst' before initialization
//     const tdzConst = "TDZ example";
// }


// When to use var, let, and const 
// Question-9


// Use case for var

function varExample() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable as above
        console.log("Inside block:", x); // Output: Inside block: 20
    }
    console.log("Outside block:", x); // Output: Outside block: 20
}
varExample();


// Use case for let
function letExample() {
    let count = 0;
    for (let i = 0; i < 3; i++) { // `i` is block-scoped to the loop
        count += i;
        console.log("Inside loop:", i); // Output: 0, 1, 2
    }
    // console.log(i); // Uncaught ReferenceError: i is not defined
    console.log("Count:", count); // Output: Count: 3
}
letExample();


// Use case for const
const PI = 3.14159;
console.log(`The value of PI is: ${PI}`); // Ideal for constants


// String Interpolation
// Question-10


const firstName = "Aslam";
const lastName = "Ali";
console.log(`Full Name: ${firstName} ${lastName}`);

// Multi-line Strings
// Question-11

const address = `123 Main St
Hussainabad, PAK`;
console.log(address);

// Simple Expressions
// Question-12
const num1 = 5;
const num2 = 10;
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);

// Function Calls
// Question-13
function multiply(a, b) {
    return a * b;
}

console.log(`The product of 3 and 4 is ${multiply(3, 4)}`);


// Tagged Template Literals
// Question-14
function simpleTag(values) {
    console.log(values);
}
simpleTag(`Hello!!! ${firstName}`);

// Formatting with Tag Functions
// Question-15
function upperCaseTag(strings) {
    return strings.map(str => str.toUpperCase()).join('');
}
console.log(upperCaseTag`This is UpperCase example.`);

// Conditional Logic
// Question-16

const currentHour = new Date().getHours();
const greeting = `Good ${currentHour < 12 ? "Morning":"Afternoon"}`
console.log(greeting);

// Loops within Template Literals
// Question-17

const shoppingList = ["Apples", "Bananas", "Carrots","Mangoes"];
//map function for iterating on all items and inserting in li and join function remove (comma), and adding (newline) /n to each list item
const htmlList = `
<ul> 
${shoppingList.map(item => `<li>${item}</li>`).join('\n')}
</ul>
`
;
console.log(htmlList);

// Escaping Backticks
// Question-18
const stringWithBacktick = `backtick is added \` `;
console.log(stringWithBacktick);

// Nested Template Literals
// Question-19
let tableData = document.getElementById('table')
const nestedHTML = `
<table>
  ${[1, 2, 3].map(row => `
    <tr>
      ${["A", "B", "C"].map(col => `<td>${row}${col}</td>`).join('')}
    </tr>
  `).join('')}
</table>
`;

console.log(nestedHTML);

// Simple Condition
// Question-20
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);


// Even or Odd
// Question-21
const number = 7;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(`Number is: ${evenOrOdd}`);


// // Grade Evaluation
// Question-22
const score = 85;
let grade = score >= 90 && score <=100 ? "A+":
score >= 80 && score <90  ? "A":
score >= 70 && score <80  ? "B":
score >= 60 && score <70 ? "C":
score >= 50 && score <60 ? "D":
score >= 40 && score <50 ? "E":
score >= 0 && score <40 ? "F":
"Not a valid input"

console.log(grade);


// Login Status
// Question-23
const isLoggedIn = true;
const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

// Discount Eligibility
// Question-24
const isMember = true;
const purchaseAmount = 1150;
const discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log(`Discount: PKR: ${discount}`);

// Determine Max Value
// Question-25
function maxValue(a, b) {
    return a > b ? a : b;
}
console.log(`Max Value: ${maxValue(222, 111)}`);

// Greeting Message
// Question-26
function greet(name = "guest") {
    return `Hello, ${name}!`;
}
console.log(greet("Faizan"));
console.log(greet());

// // Mapping Values
// Question-27
const numbers = [1, 2, 3, 4, 5];

let mappedNumbers = numbers.map(num => (num % 2 === 0 ? num * 2 : num * 3));
console.log(mappedNumbers);

// // Filtering Values
// Question-28
const strings = ["one", "two", "three", "four"];
const filteredStrings = strings.filter(str => str.length >3);
console.log(filteredStrings);

// Copying an Array
// Question-29
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];

console.log(originalArray);
console.log(copiedArray);

// Merging Arrays
// Question-30
const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Adding Elements to an Array
// Question-31
const numbersArray = [1, 2, 3];
const updatedArray = [0, ...numbersArray, 4];
console.log(updatedArray);

// Copying an Object
// Question-32
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(originalObject);
console.log(copiedObject);

// Merging Objects
// Question-33
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // last object value of b which is 3 retained  in new object

// // Updating Object Properties
// Question-34
const user = { name: "Ali", age: 25, email: "Ali@gmail.com" };
const updatedUser = {...user,email:'Ali2@gmail.com',address:'abc street'};
console.log(updatedUser);

// Passing Array Elements as Arguments
// Question-35
function sum(a, b, c) {
    return a + b + c;
}
const numArray = [4, 7, 3];
console.log(sum(...numArray));

// Combining Multiple Arrays
// Question-36
function combineArrays(...arrays) {
    return [].concat(...arrays) // add all arrays values to single array
}
console.log(combineArrays([4, 2], [11, 4], [5, 6]));

// Rest Parameter with Spread Operator
// Question-37
function multiply(factor, ...numbers) { // factor is the number which you want to multiply with
    return numbers.map(num => num * factor);  // map iterate over array and muliply each value of numbers with factor
}
console.log(multiply(9, 5, 15, 20));

// // Spread Operator with Nested Structures
// Question-38
const nestedArray = [[1, 2], [3, 4]];
const shallowCopy = [...nestedArray];
shallowCopy[0][0] = 99;
console.log(nestedArray); // Original affected due to shallow copy
console.log(shallowCopy);

// Sum Function
// Question-39
let numx = [1,2,3,4,5,6,7,8,9,10]

function sumAll(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
console.log(sumAll(...numx));

// Average Function
// Question-40
function average(...nums) {
    return nums.length ? sumAll(...nums) / nums.length : 0;
}
console.log(average(44,55,66,77));

// First and Rest
// Question-41
const [first, ...rest] = [22, 33, 44, 55, 66];
console.log(first);
console.log(rest);

// Skip and Rest
// Question-42
const [, , ...remainingColors] = ["red", "green", "blue", "yellow",'pink'];
console.log(remainingColors);

// Basic Destructuring
// Question-43
const person = { name2: "Alice", age: 30, email: "alice@example.com" , address:"Hussainabad"};
const { name2, email, ...otherDetails } = person;
console.log(name2, email, otherDetails);

// Nested Destructuring
// Question-44
const student = { id: 1, name4 : 'saad', grades : 'b+', info: { ageUser: 20, major: "CS" } };
const { id,name4, info: { major } ,...remaining} = student;
console.log(id,name4, major,remaining);
 
//   // Filter Even Numbers
// Question-45
  function filterEven(...nums) {
    return nums.filter(num => num % 2 === 0);
  }
  console.log(filterEven(1, 2, 3, 4, 5, 6)); // Output: [2, 4, 6]
  
//   // Combine and Sort Arrays
  // Question-46
  function combineAndSort(...arrays) {
    return [].concat(...arrays).sort((a, b) => a - b);
  }
  console.log(combineAndSort([3, 2], [1, 4], [6, 5])); // Output: [1, 2, 3, 4, 5, 6]
  
//   // Basic Destructuring
  // Question-47
const fruits = ["apple", "banana", "cherry"];
const [firstFruit,secondFruit , thirdFruit] = fruits;
console.log(firstFruit); // Output: "apple"
console.log(secondFruit); // Output: "banana"
console.log(thirdFruit); // Output: "cherry"


  // Skipping Elements
  // Question-48
  const colors = ["red", "green", "blue", "yellow"];
  const [primaryColor, , tertiaryColor] = colors;
  console.log(primaryColor); // Output: "red"
  console.log(tertiaryColor); // Output: "blue"
  
//   // Rest Operator
  // Question-49
  const [firstElement, ...remainingElements] = [1, 2, 3, 4, 5];
  console.log(firstElement); // Output: 1
  console.log(remainingElements); // Output: [2, 3, 4, 5]
  
  // Basic Destructuring (Person Object)
// Question-50
  const personObj = { namePerson: "Jabbar", agePerson: 30, cityPerson: "Karachi" };
  const { namePerson, agePerson, cityPerson } = personObj;
  console.log(namePerson); // Output: "Jabbar"
  console.log(agePerson);  // Output: 30
  console.log(cityPerson); // Output: "Karachi"
  
//   // Renaming Variables
  // Question-51
  const car = { make: "Toyota", model: "Corolla", year: 2020 };
  const { make: carMake, model: carModel, year: carYear } = car;
  console.log(carMake);  // Output: "Toyota"
  console.log(carModel); // Output: "Corolla"
  console.log(carYear);  // Output: 2020
  
//   // Default Values
  // Question-52
  var settings = { theme: "dark"  };
  var { theme, language = "English" } = settings;
  console.log(theme);    // Output: "dark"
  console.log(language); // Output: "English"
  
//   // Array of Arrays
  // Question-53
  const nestedArrayNew = [[1, 2], [3, 4], [5, 6]];
  const [a,b,c] = nestedArrayNew;
  console.log(a); // Output: [1, 2]
  console.log(b); // Output: [3, 4]
  console.log(c); // Output: [5, 6]
  
//   // Object within an Object
  // Question-54
  const profile = { username: "user123", details: { emailNew: "user@example.com", addressNew: "123 Main St" } };
  const { username, details: { emailNew, addressNew } } = profile;
  console.log(username); // Output: "user123"
  console.log(emailNew);    // Output: "user@example.com"
  console.log(addressNew);  // Output: "123 Main St"
  
//   // Mix of Arrays and Objects
  // Question-55
  const data = { idNo: 1, info: [{ nameUser: "Ali" }, { UserAge: 25 }] };
  const { idNo, info: [{ nameUser }, { UserAge }] } = data;
  console.log(idNo);   // Output: 1
  console.log(nameUser); // Output: "Ali"
  console.log(UserAge);  // Output: 25
  
  // Array Parameters
  // Question-56
  function printCoordinates([x, y]) {

    console.log(`X: ${x}, Y: ${y}`);
  }
  printCoordinates([10, 20]); // Output: "X: 10, Y: 20"
  
  // Object Parameters
  // Question-57
  function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  displayUser({ name: "Alice", age: 30 }); // Output: "Name: Alice, Age: 30"
  
  // List Property Names
  // Question-58
  const book = { title: "1984", author: "George Orwell", year: 1949 };
  console.log(Object.keys(book)); // Output: ["title", "author", "year"]
  
  // Count Properties
  // Question-59
  const studentData = { name: "Jameel", age: 20, grade: "A", school: "XYZ High" };
  console.log(Object.keys(studentData).length); // Output: 4
  
  // Iterate Over Keys
  // Question-60
  const product = { name: "Laptop", price: 1000, category: "Electronics" };
  Object.keys(product).forEach(key => {
    console.log(`${key}: ${product[key]}`);
  });
  
  // List Property Values
    // Question-61
  const movie = { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi" };
  console.log(Object.values(movie)); // Output: ["Inception", "Christopher Nolan", 2010, "Sci-Fi"]
  
  // Sum Values
    // Question-62
  const scores = { math: 90, science: 85, english: 95 };
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  console.log(totalScore); // Output: 270
  
  // Iterate Over Values
    // Question-63
  const userObject = { username: "user123", email: "user@example.com", location: "Earth" };
  Object.values(userObject).forEach(value => {
    console.log(value);
  });
  
  // List Entries
    // Question-64
  const carObj = { make: "Honda", model: "Civic", year: 2022 };
  console.log(Object.entries(carObj)); // Output: [["make", "Honda"], ["model", "Civic"], ["year", 2022]]
  
  // Convert Object to Array
    // Question-65
  const personObject = { firstName: "John", lastName: "Doe", age: 25 };
  const personArray = Object.entries(personObject);
  console.log(personArray); // Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 25]]
  
  // Iterate Over Entries
    // Question-66
  const setting = { theme: "light", notifications: true, privacy: "public" };
  Object.entries(setting).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  
  // Filter Keys
    // Question-67
  const inventory = { apples: 5, bananas: 15, oranges: 8, grapes: 20 };
  const filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
  console.log(filteredKeys); // Output: ["bananas", "grapes"]
  
  // Transform Values
    // Question-68
  const temperatures = { morning: 20, afternoon: 25, evening: 15 };
  const transformedTemps = {};
  Object.entries(temperatures).forEach(([key, value]) => {
    transformedTemps[key] = value * 9 / 5 + 32;
  });
  console.log(transformedTemps); // Output: { morning: 68, afternoon: 77, evening: 59 }
  
  // Key-Value Swap
    // Question-69
  const roles = { admin: "1", editor: "2", viewer: "3" };
  const swappedRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
  );
  console.log(swappedRoles); // Output: { "1": "admin", "2": "editor", "3": "viewer" }
  
  // Filter and Map
   // Question-70
  function filterAndMap(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num ** 2);
  }
  console.log(filterAndMap([1, 2, 3, 4, 5])); // Output: [4, 16]
  
  // Sort and Reduce
   // Question-71
  function sortAndReduce(arr) {
    return arr.sort().reduce((result, word) => `${result} ${word}`);
  }
  console.log(sortAndReduce(["banana", "apple", "cherry", "date"])); // Output: " apple banana cherry date"
  

//   Simple Callback
     // Question-72
  function greet(name, callbackFunction) {
    const message = `Hello, ${name}!`;
    callbackFunction(message);
  }
  function printGreeting(message) {
    console.log(message);
  }
  greet("Alice", printGreeting); // Output: "Hello, Alice!"
  
//   Asynchronous Callback
     // Question-73
  function fetchData(callback) {
    setTimeout(() => {
      const data = { id: 1, name: "Sample Data" };
      callback(data);
    }, 1000);
  }
  function displayData(data) {
    console.log(data);
  }
  fetchData(displayData); // Output (after 1 second): { id: 1, name: "Sample Data" }
  
  // Simple Arrow Function
     // Question-74
  const add = (a, b) => a + b;
  console.log(add(3, 5)); // Output: 8
  
  // Arrow Function with Array Methods
     // Question-75
  const numbersArr = [1, 2, 3, 4, 5];
  const squaredNumbers = numbersArr.map(num => num ** 2);
  console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  
  // Variable Scope
     // Question-76
  function outer() {
    const x = 10;
    function inner() {
      console.log(x);
    }
    inner();
  }
  outer(); // Output: 10
  
  // Closure
     // Question-77
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }
  const counter1 = createCounter();
  const counter2 = createCounter();

  counter1(); // Output: 1
  counter1(); // Output: 2
  counter1(); // Output: 3

  counter2(); // Output: 1

  // Simple Default Parameters
     // Question-78
  function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
  }
  greet("Alice", "Good morning"); // Output: "Good morning, Alice!"
  greet("Bob"); // Output: "Hello, Bob!"
  
  
  // Default Parameters with Other Arguments
     // Question-79
  function calculateArea(width = 10, height = 5) {
    return width * height;
  }
  console.log(calculateArea());         // Output: 50
  console.log(calculateArea(20, 30));   // Output: 600
  
  // Square Numbers
     // Question-80
  const numsArray = [1, 2, 3, 4, 5];
  const squaredArray = numsArray.map(num => num ** 2);
  console.log(squaredArray); // Output: [1, 4, 9, 16, 25]
  
  // Convert to Uppercase
     // Question-81
  const words = ["apple", "banana", "cherry"];
  const uppercaseWords = words.map(word => word.toUpperCase());
  console.log(uppercaseWords); // Output: ["APPLE", "BANANA", "CHERRY"]
  


// Filter Even Numbers
     // Question-82
const numbersArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbersArrays.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Filter Long Words
     // Question-83
const wordsArray = ["apple", "banana", "cherry", "date"];
const longWords = wordsArray.filter(word => word.length > 5);
console.log(longWords);

// Log Numbers
     // Question-84
numbersArrays.forEach(num => console.log(num));

// Log Word Lengths
     // Question-85
wordsArray.forEach(word => console.log(word.length));

// Sum of Numbers
     // Question-86
const summing = numbersArrays.reduce((total, num) => total + num, 0);
console.log(summing);

// Concatenate Strings
     // Question-87
const phrases = ["Hello", "world", "this", "is", "JavaScript"];
const sentence = phrases.reduce((acc, word) => `${acc} ${word}`,);
console.log(sentence);

// Check for Even Number
     // Question-88
const numberEvenCheck  = [1, 3, 5, 7, 8,10]
const hasEvenNumber = numberEvenCheck.some(num => num % 2 === 0);
console.log(hasEvenNumber);

// Check for Long Word
     // Question-89
const hasLongWord = wordsArray.some(word => word.length > 5);
console.log(hasLongWord);


// Check All Even Numbers
     // Question-90
const numbersAllEvenCheck = [2,4,6,8]
const allEven = numbersAllEvenCheck.every(num => num % 2 === 0);
console.log(allEven);

// // Check All Long Words
     // Question-91
const allLongWordsCheck = ["elephant", "giraffe", "hippopotamus"];
const allLongWords = allLongWordsCheck.every(word => word.length > 5);
console.log(allLongWords);

// Find First Even Number
     // Question-92
const firstEven = numberEvenCheck.find(num => num % 2 === 0);
console.log(firstEven);

// Find Long Word
     // Question-93
const firstLongWord = wordsArray.find(word => word.length > 5);
console.log(firstLongWord);

// Find Index of First Even Number
     // Question-94
const firstEvenIndex = numberEvenCheck.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);

// Find Index of Long Word
     // Question-95
const firstLongWordIndex = wordsArray.findIndex(word => word.length > 5);
console.log(firstLongWordIndex);


// Simple Promise
     // Question-96
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)});
}
delay(5000).then(() => console.log("Hello, world! with delay"));

// Promise Chain
     // Question-97
// function fetchData() {
//     return new Promise(resolve => {
//       resolve({ message: "Data fetched successfully!" });
//     });
//   }
  
//   fetchData().then(data => {
//     console.log(data); // Output: { message: "Data fetched successfully!" }
//   });

function fetchData () {
      return new Promise(resolve => {
          resolve({ message: "Data1 fetched successfully!" });
      })
      
  }
  fetchData().then(data=>console.log(data))

// Error Handling
     // Question-98
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         const userData = { name: "John", age:33 };
//         if (!userData.age) {
//             reject("User data is incomplete.");
//         } else {
//             resolve(userData);
//         }
//     });
// }
// fetchUserData()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


    let fetchUserData = ()=>{
        return new Promise((resolve,reject)=>{
            let abcx = {name:"John"}
            !abcx.age ? reject("Userx data is incomplete.") : resolve(abcx)
        }
    )
    }

    fetchUserData().then(data=>data).catch(data=>console.log(data))

// Simulate Network Request
     // Question-99
function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ temperature: 25, condition: "Sunny" });
            } else {
                reject("Failed to fetch weather data.");
            }
        }, 1000);
    });
}
getWeather()
    .then(weather => console.log(weather))
    .catch(error => console.log(error));

// Simple async Function
     // Question-100
async function sayHello() {
    await delay(2000); 
    console.log("Hello, world!");
}
sayHello();

// Fetch Data with async/await
     // Question-101
async function getUserData() {
    try {
        const userData = await fetchUserData();
        console.log(userData);
    } catch (error) {
        console.log(error);
    }
}
getUserData();

// Function to fetch user data
     // Question-102
function fetchUser() {
    return new Promise(resolve => {
        const user = { name: "Alice", age: 25 }; // Simulate user data
        resolve(user);
      });
  }
  

//   Fetch and Process Data:
//        // Question-103
  // Function to fetch posts for a user
    
  function fetchPosts() {
    return new Promise(resolve => {
      const posts = [
        { title: "Post 1", content: "This is the first post." },
        { title: "Post 2", content: "This is the second post." }
      ]; // Simulate posts data
      resolve(posts);
    });
  }
  
  // Define async function getUserAndPosts
     
  async function getUserAndPosts() {
    const user = await fetchUser(); // Wait for user data
    const posts = await fetchPosts(); // Wait for posts data
    console.log("User:", user); // Log the user data
    console.log("Posts:", posts); // Log the posts data
  }
  
  // Call the function
  getUserAndPosts();


//   Error Handling in async/await:
     // Question-103
// Function to fetch user data
function fetchUserNew() {
    return new Promise((resolve, reject) => {
      const user = 'Muzammil'; // Simulating no user found
      if (!user) {
        reject("Error: User not found");
      } else {
        resolve(user);
      }
    });
  }
  
  // Define async function getUserInfo
  async function getUserInfo() {
    try {
      const user = await fetchUserNew(); // Wait for user data
      console.log("User:", user); // Log the user data
    } catch (error) {
      console.log(error); // Log error if no user is found
    }
  }
  
  // Call the function
  getUserInfo();


// Simulate API Calls
     // Question-104
async function getData() {
    function apiCall() {
        return new Promise((resolve, reject) => {
            const success = Math.random() > 0.3;
            setTimeout(() => {
                success ? resolve("Data received") : reject("API call failed");
            }, Math.random() * 1000);
        });
    }
    try {
        const result1 = await apiCall();
        console.log(result1);
        const result2 = await apiCall();
        console.log(result2);
        const result3 = await apiCall();
        console.log(result3);
    } catch (error) {
        console.log(error);
    }
}
getData();




