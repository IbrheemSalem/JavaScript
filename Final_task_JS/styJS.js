/*


##########################################################################

                            Introduction

##########################################################################



document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.textAlign = "center";



console.log("%cElzero %cWeb %cschool","color:red","color:green; font-size:40px","background:blue; color:white");


console.group("Group 1");
console.log("mas One");
console.log("mas two");
console.group("child Group");
console.log("child mas One");
console.log("child mas two");
console.group("Greid child Group");
console.log("Greid mas One");
console.log("Greid mas two");
console.groupEnd();
console.group("Group 2");
console.log("mas2 One");
console.log("mas2 two");
console.groupEnd();


console.table(["Elzero","0","ibrheem","Mohammad","Abdullah"]); 

// console.log("Iam In Console");
/* document.write("Iam In Page"); */

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//##########################################################################

//                          Data Types And Variables

//##########################################################################
/* 
let numberOne = 10;
let numberTwo = 20; 

console.log(numberOne +""+ numberTwo);
console.log(typeof (numberOne +""+ numberTwo));
console.log(`${numberOne}${numberTwo} `);
console.log(typeof(`${numberOne}${numberTwo}`));
console.log(numberOne +"\n"+ numberTwo);
console.log(`${numberTwo}
${numberOne} `);


//console.log(elzero.innerHTML); // object
//console.log(typeof elzero); // object

console.log("\`I\'m In \n \\\\ Love \\\\ \"\"\" \'\'\' \n ++ With ++ \n \\\"\"\"\\\"\"\"\ \n  \"\"JavaScript\"\"\`\` ");
/////////////////// OR ////////////////////
console.log(`\`I\'m In
\\\\ Love \\\\ \"\"\" \'\'\'
++ With ++
\\\"\"\"\\\"\"\"\
\"\"JavaScript\"\"\`\``);


let a = 21;
let b = 20;

console.log(`_${b}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
/////////////////// OR ////////////////////
console.log("_" + a + "_" + b +""+ a +"_"+ b +""+ a +"_"+ b +""+ a +"_" + b); // _21_2021_2021_2021_20_
*/
/*
===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat
 
let Title = "Elzero", Desctiption = "Elzero Web School" , Date = "25/10";


let desTwo = (`
<div>
<h3>${Title}</h3>
<p>${Desctiption}</p>
<span>${Date}</span> 
</div>
`);
//////////////////////////
let des = (`
<div>
<h3>Elzero</h3>
<p>Elzero Web School</p>
<span>25/10</span> 
</div>
`);

let result = des.repeat(4);
document.write(result);
document.write("#######################################################");
let result2 = desTwo.repeat(4);
document.write(result2);
*/
/* 
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0


let num = 3;

// Solution One
console.log(num + num ); // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(num++ * num); // 6

// Soultion Four
console.log(num ** num / num - num); // 6

// Solution Five
console.log(++num * --num / --num); // 6
 

let numTwo = "10";

// Solution One
console.log(+numTwo + +numTwo); // 20

// Solution Two
console.log(+numTwo + --numTwo + --numTwo - --numTwo); // 20

// Solution Three
console.log(--numTwo * --numTwo - +numTwo - +numTwo); // 20

// Solution Four
console.log(+numTwo * +numTwo - +numTwo); // 20


let pointsTow = 10;

// Write Your Code Here

console.log(pointsTow / pointsTow + pointsTow / pointsTow + pointsTow / pointsTow + pointsTow); // 13

// Write Your Code Here

console.log(pointsTow - pointsTow / pointsTow + pointsTow / pointsTow); // 8;


let points = 10;

// Write Your Code Here
points +=3;

console.log(points); // 13

// Write Your Code Here
points -=5;

console.log(points); // 8;

*/

/*
Challenge 1


let a = 10;
let b = "20";
let c = 80;
console.log("##############################################################"); 

//console.log(++a + +b++ + +c++ - +a++); // 100
//console.log(++a + -b + +c++ - -a++ + +a);//94
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);//97

/*
[++a] [+]
[++a]
- Value:
- Explain:
[+]
- Explain:
*/

/*
Challenge 2
 

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(); // 2000
console.log(); // 173
*/
/*
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log("$$$$$$$$$$$$$$$$$$$$$"); 
// Your Solutions
console.log(Math.round(100000.4)); // 100000
console.log(parseFloat(100000)); // 100000
console.log(100000.339.toFixed(0)); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.max("100000","1000")); // 100000
console.log(Math.min("100000100000","100000")); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(Math.trunc(100000.88888)); // 100000
console.log(parseInt("100000.33")); // 100000


console.log(Number.MIN_SAFE_INTEGER*-1); // 9007199254740991
console.log((`${Number.MAX_SAFE_INTEGER}`.length));


let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;

console.log(Number.isInteger(num)* 2); // 2

let flt = 10.4;

console.log(Math.ceil(flt)-1); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

 
 
/*
  Number Challenge


let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log("############################");
console.log(Math.round(Math.min(a , b , c , d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a , Math.round(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(b) / Math.ceil(d)); // 67 => Number



let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.slice(0,-5).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase().repeat(3)); // eee


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
 

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.slice(0,6).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,6) + a.charAt(10).toUpperCase() + a.substr(10,17)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase() + a.slice(1).toUpperCase()); // eLZERO WEB SCHOOl



console.log(100 == "100"); // true
console.log(100 !== 1000); // true
console.log(110 !== 100 || 10 || 20); // true
console.log(-10 == "-10"); // true
console.log(!(-50 === +"-40")); // true
console.log(typeof -10 == typeof -"-40"); // true
console.log( "10" == 10); // true
console.log( !20 == false); // true


let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b > a < c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
*/

// Edit What You Want Here

let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times


// Condition 1

if (num1 >= num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2


if (num1 >= num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 >= num2 && num1 == num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) == num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) !== num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6
 
if ((num1 + num2 + num3) > num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 !== 21) {
  console.log("True");
} else {
  console.log("False");
}
*/

/*


let a = 10;

(a < 10) ? console.log(10) : (a >= 10 && a <= 40) ? console.log("10 To 40") : (a > 40) ? console.log("> 40") : console.log("Unknown"); 

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
 
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (typeof st.split !== typeof "string") {
  console.log("Good");
}

if (typeof st === typeof "number") {
  console.log("Good");
}
if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
  If Condition Challenge
 


let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];

myFriends.length = num;
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
 

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();
// Write Your Code Here

console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).reverse();

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
website.length;

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if(haystack.indexOf(needle)){
console.log("Found ");
}if(haystack.includes(needle)){
    console.log("Found ");
}if(haystack === (needle , 1)){
    console.log("Found ");
}
// Write 3 Solutions

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = (arr1.concat(arr2)).sort().join("").toLowerCase().slice(-arr1.length) ;

// Your Code Here
console.log(allArrs); // fxy

 
  Array Challenge

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];


console.log(my.slice(-my.indexOf("Mazero"))); // ["Osama", "Elham", "Mazero", "Ahmed"];

  
zero += my.includes("Ahmed");
console.log(zero);
my = my.slice(-counter , -zero)
console.log(my); // ["Elham", "Mazero"]

my = my

console.log(); // "Elzero"


console.log(); // "rO"
 


 

let start1 = 10;
let end1 = 0;
let stop = 3;
for(let s = start1 ; s > end1 ; s--){

    if(s < 10){
        console.log(`0${s}`);
    }else{
        console.log(`${s}`);
    }if(s === stop){
        break;
    }
 
}

let start = 1;
let end = 6;
let breaker = 2;

for(let s = start ; s <= end ; s +=start){
    console.log(s);
    for(let q = start ; q <= breaker ; q+=start){
        console.log(`--${q*breaker}`);
    }
}


let index = 10;
let jump = 2;
let end2 = 0;

for (let j=index; j > end2 ; j-=jump) {
    console.log(j);
    if( j === 4){
        break;
    }
}

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";



for(let len = friends.length - friends.length; len < friends.length; len++ ){
 

    if(friends[len].startsWith(letter.toUpperCase())){
       continue; 
    } 
    console.log(`${len} => ${friends[len]}`);

}

let start = 0;
let swappedName = "elZerO";
let result = "";
for(let qw = start ; qw < swappedName.length ; qw++){
    if(swappedName[qw] === swappedName[qw].toUpperCase()){
        result += swappedName[qw].toLowerCase();

    }else if(swappedName[qw] === swappedName[qw].toLowerCase()){
        result += swappedName[qw].toUpperCase();
    }
}

console.log(result);
 
let start3 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let r = start3 + mix.indexOf(2) ; r < mix.length ; r++){
    if(typeof mix[r] === "string"){
        continue;
    }
    console.log(mix[r]);
}

/*
  Loop Challenge
 

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let Admins = 3;
let counter1 = 1;
let counter2 = 1;
let counter3 = 1;
document.write(`<div>We Have ${Admins} Admins</div>`);

for(let j = 0 ; j < myAdmins.length ; j++){
    if( myAdmins[j] === "Stop"){
        break;
    }
    document.write(`<hr>`);
    document.write(`<div>`);
    document.write(`<div> The Admins For team ${j + 1} Is ${myAdmins[j]}</div>`);
    document.write(`<h3>Team Member</h3>`);
    for(i = 0 ; i<myEmployees.length ; i++){
        if(myAdmins[j].startsWith("A") && myEmployees[i].startsWith("A")){
            document.write(`<p>-${counter1++} ${myEmployees[i]}</p>`);
        }else if(myAdmins[j].startsWith("O") && myEmployees[i].startsWith("O")){
            document.write(`<p>-${counter2++} ${myEmployees[i]}</p>`);
        }else if(myAdmins[j].startsWith("S") && myEmployees[i].startsWith("S")){
            document.write(`<p>-${counter3++} ${myEmployees[i]}</p>`);
        }
    }


    document.write(`</div>`);
}

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let i = index;
while(index < friends.length) {
  if(typeof friends[index] === "number" || friends[index].toString().startsWith("A")){
    index++;
    continue;
  }
  console.log(`${counter++ + 1} - ${friends[index]}`);
  index++;
}



function sayHello(theName, theGender) {
  if(theGender == "Male"){
  console.log(`Hello Ms : ${theName}`);
  }else if(theGender == "Female"){
    console.log(`Hello Miss  : ${theName}`);
  }else{
  console.log(`Hello  : ${theName}`);
}
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"



function calculate(firstNum, secondNum, operation) {
  if(secondNum == null && operation == null){
    console.log(firstNum);
  }else if(operation === null){
    console.log(firstNum + secondNum);
  }else if(operation == "add"){
      console.log(`add : ${firstNum + secondNum}`);
  }else if(operation == "subtract"){
      console.log(`subtract : ${firstNum - secondNum}`);
  }else if(operation == "multiply"){
      console.log(`multiply : ${firstNum * secondNum}`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for(let i = startYear ; i<=endYear; i++){
    document.write(`  <option value="${i}"> ${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

function multiply(...Number) {
  let result = 0;
  for(let i=0 ; i <  Number.length ; i++){
    if(typeof Number[i] === "string"){
      continue;
    }else{
      result = parseInt(Number[i-1]) * parseInt(Number[i]);
    }
  }
  return result;
}

console.log(multiply(10, 20));
console.log(multiply("A", 10, 30));
console.log(multiply(100.5, 10, "B"));


/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator

function checkStatus(a, b, c) {
  let name;
  let age;
  let bool;

  if(typeof a === "string"){
    name =a;
  }else if(typeof a === "number"){
    age =a;
  }else{
    bool =a;
  }
  if(typeof b === "number"){
    age = b;
  }else if(typeof b === "string"){
    name =b;
  }else{
    bool =b;
  } 
  if(typeof c === "number"){
    age = c;
  }else if(typeof c === "string"){
    name =c;
  }else{
    bool =c;
  } 

  if(bool === true){
    bool = `You Are Available For Hire`;
  }else{
    bool = `You Are Not Available For Hire`;
}
  
  document.write(`<p>Hello ${name} , Your Age Is ${age} ${bool}</p>`);

}
// Needed Output
console.log(checkStatus("Osama", 38, true));// "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true));// "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama"));// "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38));// "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

function getDetails(vnamw, zAge, zCountry) {
  function namePattern() {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    return `${vnamw.slice(0,vnamw.indexOf(" "))} ${vnamw.substr(vnamw.indexOf(" "),2).toUpperCase()}.`;
  }
  namePattern();
  function ageWithMessage() {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    return `Your Age Is ${parseInt(zAge)}`;
  }
  ageWithMessage();
  function countryTwoLetters() {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return zCountry.slice(0,2).toUpperCase();
  }
  countryTwoLetters();
  function fullDetails() {
    // Write Your Code Here
    return `${namePattern()} ${ageWithMessage()} ${countryTwoLetters()}`
  }
  countryTwoLetters();
  return fullDetails(); // Do Not Edit This
}
 
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function


urlCreate = (protocol, web, tld) =>`${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

function specialMix(...data) {
  let result = 0;
  for(let i = 0 ; i < data.length ; i++){
    if(isNaN(parseInt(data[i])) === false){
      result += parseInt(data[i]);} 
  }
  if(result === 0){
    console.log(`All Is Strings`);
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];// Elzero

let newMix = [];

newMix = mix.map(function (ele){
  return  isNaN(parseInt(ele)) ? ele : "";
}).reduce(function (acc,curent){
  return acc + curent;
})

console.log(newMix);


let myString = "EElllzzzzzzzeroo";// Elzero

let newString = myString.split("").filter(function (ele , indec){
  return myString.indexOf(ele) === indec;
}).reduce(function(acc,curent){
  return acc + curent;
})
//let newmyString = myString.split("").filter(function(elet, index){
//  return myString.indexOf(elet) === index;
//})

console.log(newString);


let myArray = ["E", "l", "z", ["e", "r"], "o"]; // Elzero

let newArr = myArray.reduce(function (acc, curent){
  return acc + curent;
}).split("").filter(function(ele){
  return ele !==  ",";
}).reduce(function (acc, curent){
  return acc + curent;
})
console.log(newArr);


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];// [-1, -10, 10, 20, -5, -3]

let newnumsAndStrings = numsAndStrings.filter(function(ele){
  return !isNaN(parseInt(ele));
}).map(function(ele){
  return -ele;
})

console.log(newnumsAndStrings);

// Create Your Object Here


// My Name Is Elzero, My Age Is 38, I Live in Egypt
const member = {
  name: "John",
  age: "Doe",
  country: 50,
  fullDetails(){
    return this.name + " " + this.age + " " + this.country;
  }
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());

// Method One
// Create Your Object Here
const objMethodOne = {
  property: 'testFirstName',
  property2: 'testLastName'
};
console.log(objMethodOne.property); 
console.log(objMethodOne.property2); 



const orgObject = { company: 'ABC Corp', company3: 'ABC Corp' };

console.log(orgObject.company);  
console.log(orgObject.company3); 

const orgObject2 = { company: 'ABC CorpCorpCorpCorpCorpCorp' }
const carObject2 = { carName: 'Ford' }
console.log(orgObject2.company);  
console.log(carObject2.carName);


class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
}
const person = new Person('testFirstName', 'testLastName');

console.log(person.firstName); // testFirstName
console.log(person.lastName); // testLastName

 

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
const finalObject = Object.assign({a}, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6

 
// The Object To Work With

let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

let game = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${game[i]}`);
  console.log(`The Publisher Is ${myFavGames[game[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[game[i]]["price"]}`);

  // Check If Nested Object Has Property (bestThree)
  if (Object.hasOwn(myFavGames[game[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[game[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[game[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[game[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20));
}

// Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"


let myimg =document.images;

for(let i = 0 ; i < myimg.length ; i++){
  myimg[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  myimg[i].alt = "Elzero Logo";
}

let calc =document.querySelector("input");
let result = document.getElementsByClassName("result")[0];

calc.oninput = function () {
  result.innerHTML =`${calc.value}USD Dollar = ${(calc.value * 15.6).toFixed(2)}Egyptian Pound `;
}


let myimg =document.images;

for(let i = 0 ; i < myimg.length ; i++){
  if(myimg[i].hasAttribute("alt")){
    myimg[i].alt = "odd";
  }else{
    myimg[i].alt = "Elzero New";
  }
 

}
*/
let elNum =document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");




