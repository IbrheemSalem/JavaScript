console.log('Here is : ', 'Reduce & Filter')

//Using Reduce 1 -5
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
let agv1 = 0;
function per(num){
    agv1 = num.reduce((a,b) => b.age + a,0) / persons.length;
    return agv1;
}
console.log(per(persons));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/

function longestName(arr) {
    return arr.reduce(function(acc,ele){
        if(acc.length < (ele.name.first+ele.name.last).length){
            acc = ele.name.first + " " + ele.name.last;
        }
        return acc;
    },"")
}
console.log(longestName(persons));

/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
let maxNumber = [1,2,4,9];
let maxNum = 0;
function maxNu(maxNum){
    maxNum = maxNum.reduce((a,b) => a > b ? a : b) ;
    return maxNum;
}
console.log(maxNu(maxNumber));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
function repeatChar(str, char) {
    var arr = str.split("");
    return arr.reduce(function (count, elem) {
        if (elem === char) {
        return count + 1;
    }
    return count;
    }, 0)
}
console.log(repeatChar("hello world",'w'));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/

/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/




//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var numbers  = [1,8,6,4];
var evens = 0;
function evenOnly(numbers){
    evens = numbers.filter((num) => num % 2 === 0);
    return evens;
}
console.log(evenOnly(numbers));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var numbers  = [1,8,6,4];
var evens = 0;
function evenOnly(numbers){
    evens = numbers.filter((num) => num % 4 === 0);
    return evens;
}
console.log(evenOnly(numbers));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var words = ['get', 'help', 'set', 'moon', 'class', 'code', 'Get',  ];

var letterL = 'e'; // toLowerCase()

var letterU = 'G'; // toUpperCase

var word = "get"; // OR GET

const outputLo= words.filter(x => x.includes(letterL));
console.log(outputLo);

const outputUp = words.filter(x => x.includes(letterU));
console.log(outputUp);

const outputL_U = words.filter(x => x.toUpperCase().match(word.toUpperCase()));
console.log(outputL_U);
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(strings.length);
var evensStr = "";
function evenIndexOddLength(strings){
      evensStr = strings.filter((x) => x.length % 2 != 0);
    return evensStr;
}
console.log(evenIndexOddLength(strings));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
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

let str = "";
function olderThan(pers,num){
  str = pers.filter((b) => b.age >= num) ;
  return str;
}
console.log(olderThan(persons,56));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
var lengthStr = "";
function shorterThan(strings,num){
    lengthStr = strings.filter((x) => x.length < num);
    return lengthStr;
};
console.log(shorterThan(strings,5));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/


// if you finish the exercises review the material of the week and help your classmate




//Extra Filter
/*
12
Using Filter
Create a function called longerThan
that accept an array of strings
and return the longer string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: longerThan(strings,4) => ["mercer","madrasa","rashed2"]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
var stringsLength = "";

function longerThan(strings,num){
    stringsLength =strings.filter(x => x.length > num);
    return stringsLength;
};
console.log(longerThan(strings,4));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
13
Using Filter
Create a function called onlyOneWord
that accept an array of strings
and return only those strings with a single word (no spaces)
var strings= [ 'return', 'phrases', 'with one word' ];
Ex: onlyOneWord(strings) => [ 'return', 'phrases' ]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var strings= [ 'return', 'phrases', 'with one word' ];
var stringsLength = "";

function longerThan(strings){
    stringsLength =strings.filter(x => x.includes(' ') == false);
    return stringsLength;
};
console.log(longerThan(strings));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
14
Using Filter
Create a function called positiveRowsOnly
that accept an array of array of numbers(matrix)
and return only the rows in the matrix that have all positive integers
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
Ex: positiveRowsOnly(numbers) => [ 3, 30,  300 ]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];

function positiveRowsOnly(numbers) {
    var result = numbers.filter(function(i) {
        return i.every(function(j){
            return j>= 0;
    });
    });
    return result;
};
console.log(positiveRowsOnly(numbers));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
15
Using Filter
Create a function called allSameVowels
that accept an array of strings
return only those words where all the vowels are the same
var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
Ex: allSameVowels(strings) =>  [ 'amalgam', 'zoom' ]
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
var stringsLength = "";
let rex = /^[aioue]/ig;
function longerThan(strings){
    stringsLength =strings.filter(strings => rex.test(strings));
    return stringsLength;
};
console.log(longerThan(strings));
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
//Using Reduce 16 -
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/

/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
16
Using Reduce
Create a function called objectify
that accept an array of pairs array
and turns an array of arrays into an object
var array= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]
Ex: objectify(array) =>  { 'Thundercats': '80s', 'The Powerpuff Girls': '90s', 'Sealab 2021': '00s' };
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/

                              //No Sol
var arr= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]


let newarr = arr.reduce(function(acc, cur) {
    return acc.concat(cur);
},[])

console.log(newarr);

var obj = new Object(newarr);

console.log(obj);
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
/*
17
Using Reduce
Create a function called luckyNumbers
that accept an array of number
and turns an array of arrays into an object
var array= [ 30, 48, 11, 5, 32 ]
Ex: luckyNumbers(array) => 'Your lucky numbers are: 30, 48, 11, 5, and 32';
*/
/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
var array= [ 30, 48, 11, 5, 32 ];

let newarr = array.reduce(function(acc, cur) {
    result = acc.concat(cur);
    return result;
},[])

console.log(`Your lucky numbers are:${result}`);

/*#######################################################################################*/
/*#######################################################################################*/
/*#######################################################################################*/
// if you finish the exercises review the material of the week and help your classmate