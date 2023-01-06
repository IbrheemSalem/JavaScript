console.log('Here is : ', 'Object')
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var persons =  {
  firstName : "ibraheem",
  lastName : "Salem",
  date : "29/7/1996",
  favoriteFoo : {
      1 : "a",
      2 : "b",
      3 : "c",
  },
  movie : {
      1 : "m1",
      2 : "m2",
      3 : "m3",
      4 : "m4",
      5 : "m5",
  },
};
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

var array = [];
function firstName(arr) {
    for (var i = 0; i < arr.length; i++) {
        array.push(arr[i].name.first);
    }
    return array;
}
console.log(firstName(persons));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

let arr = 0;
function averageAge(persons){
  for(let i = 0 ; i < persons.length ; i++){
      arr +=(persons[i].age) /  persons.length;
  }
  return arr;
}
console.log(averageAge(persons));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
console.log('Here is : ', 'Object')
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
function olderPerson(arr) {
    var maxAge = arr[0].age;
    var indexOlder = 0;
    for (var i = 1; i < arr.length; i++) {
        if (maxAge < arr[i].age) {
        maxAge = arr[i].age;
        indexOlder = i;
    }
    }
    return arr[indexOlder].name.first + " " + arr[indexOlder].name.last;
}
console.log(olderPerson(persons));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
console.log('Here is : ', 'Object')
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
let firstName = 0;
let lastName = 0;   
let total = 0; 

function longestName(persons){
    let maxLength = persons[0];
    for(let i = 0 ; i < persons.length ; i++){
        firstName = persons[i].name.first.length;
        lastName = persons[i].name.last.length;
        total = firstName + lastName;
        //console.log(`leng => ${total}`);
        if(persons[i].name.first.length+persons[i].name.last.length > maxLength.name.first.length+maxLength.name.last.length){
            maxLength = persons[i]
        }
    }
    return maxLength;
}
console.log(longestName(persons));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
console.log('Here is : ', 'Object')
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

let firstName = 0;
let lastName = 0;   
let total = 0; 

function longestName(persons){
    let maxLength = persons[0];
    for(let i = 0 ; i < persons.length ; i++){
        firstName = persons[i].name.first.length;
        lastName = persons[i].name.last.length;
        total = firstName + lastName;
        //console.log(`leng => ${total}`);
        if(persons[i].name.first.length+persons[i].name.last.length > maxLength.name.first.length+maxLength.name.last.length){
            maxLength = persons[i]
        }
    }
    return maxLength;
}
console.log(longestName(persons));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
    my:1,
    name:2,
    is:1,
    alex:1,
    mercer:1,
    class:1,
    b:1,
    baba:1,
    mama:1,
    hello:3
}
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var repeatWord = "My name is alex mercer class name B baba mama hello Hello HELLO";
var newRea = repeatWord.split(" ");
var obj= {};


for (let i = 0; i < newRea.length; i++) {
    if (typeof obj[newRea[i].toLowerCase()] === 'undefined') {
        obj[newRea[i]] = 1;
    } else {
        obj[newRea[i].toLowerCase()] += 1;
    }
}
console.log(obj);
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var repeatChar = "mamababatetacedo";
var newRepeatChar = repeatChar.split("");
var obj= {};

for (let i = 0; i < newRepeatChar.length; i++) {
    if (obj[newRepeatChar[i]] === undefined) {
        obj[newRepeatChar[i]] = 1;
    } else {
        obj[newRepeatChar[i]]++;
    }
}
console.log(obj);
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/





/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
let Obj = {
  firstName:"Moh",
  age:24
};
function objectToArray(objArr){
  const propertyNames = Object.entries(objArr);
  return propertyNames;
}
console.log(objectToArray(Obj));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
const arr = ["firstName","Moh","age",24];
const res = arr.reduce((acc,curr)=> (acc[curr]= curr ,acc),{});
console.log(res)

/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var arr = {
    firstName:"Moh",
    age:24,
    movies:[1,5,"string"]
};
let result = [];
function onlyNumber(arr){
    for (const key in arr) {
        if(typeof arr[key] === 'number'){
            result = `${key}: ${arr[key]}`;
           return result;
        }
    }
}
console.log(onlyNumber(arr));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var arr = {
    firstName:"Moh",
    age:24,
    movies:[1,5,"string"]
};
let result = [];
function onlyNumber(arr){
    for (const key in arr) {
        if(typeof arr[key] === 'string'){
            result = `${key}: ${arr[key]}`;
           return result;
        }
    }
}
console.log(onlyNumber(arr));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var arr = {
    firstName:"Moh",
    age:24,
    movies:[1,5,"string"]
};
let result = [];
function onlyNumber(arr){
    for (const key in arr) {
        if(typeof arr[key] === 'object'){
            result = `${key}: ${arr[key]}`;
           return result;
        }
    }
}
console.log(onlyNumber(arr));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
let objkey = {firstName:"Moh",age:24,movies:[1,5,"string"]};
function keysArray(obj){
    let key = Object.keys(obj);
    return key;
}
console.log(keysArray(objkey));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
let objkey = {firstName:"Moh",age:24,movies:[1,5,"string"]};
function keysArray(obj){
    let key = Object.values(obj);
    return key;
}
console.log(keysArray(objkey));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
let obj = {
    a:1,
    b:3,
    c:4
};
delete obj.b;
let newObj = { a: 4, c: 66 };
let res = Object.assign(obj,newObj);
console.log(res);
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
let keysArray = {
    a:1,
    b:2,
    c:3,
    d:4
};
function objectLength(keysArray){
    return  Object.keys(keysArray).length;
}
console.log(objectLength(keysArray));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even
Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
let obj = {
    a:1, 
    b:2, 
    c:3, 
    d:4
};

let oddArr = [];
for (let key in obj) {
    if (key.charAt(key.length - 1) % 2 !== 0) {
        oddArr = [...oddArr, obj[key]];
        console.log(oddArr);
    }
}
let evenNum = oddArr.filter((number) => number % 2 === 0);
console.log(evenNum);

const propertyNames = Object.values(obj);

console.log(propertyNames);

let evenNu = oddArr.filter((number) => number % 2 === 0);
console.log(evenNu);

/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key
Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
let obj = {
    car:1, 
    school:2, 
    monster:3, 
    alexMercer:4
};
let result = 0;
function longestKey(arr){
    arr = Object.values(obj);
        result = Math.max(...arr);
    return result;
}
console.log(longestKey(obj));
