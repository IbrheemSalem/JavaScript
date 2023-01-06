
/////////////////////////////////////////// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
/*
var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

console.log("###################################################################################");
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

console.log(`Current time is : ${hour} : ${minute} : ${second}`);
*/
///////////// 2
/* 
function print_current_page()
{
window.print();
}

////3. Write a JavaScript program to get the current date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

today = mm + "-" + dd + "-" + yyyy ;
console.log(today);
console.log(`or  or or or or or or or or or or or or or or or or or or or or`);
console.log(`${mm} - ${dd} - ${yyyy}`);
console.log(`${dd} - ${mm} - ${yyyy}`);

//////////// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
var sid1 = 5;
var sid2 = 6;
var sid3 = 7;
var s= (sid1 + sid2 + sid3)/2;

var a = Math.sqrt(s*((s-sid1)*(s-sid2)*(s-sid3)));
console.log(a);

/////// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
////5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);

my solution
const x='w3resource';
const reverse=x.split("").reverse().join(" ")
console.log(reverse);


function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

///////////7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  Go

for(let num = 2014 ; num <=2050; num++){
    var d = new Date(num, 0, 1);
    if (d.getDay() === 0){
        console.log("1st January is being a Sunday  "+num);
    }
}
/////////////////////////////8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
const num = Math.ceil(Math.random()*10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if(gnum == num){
    console.log("Match");
}else{
    console.log("Not Match");
}

////////////9. Write a JavaScript program to calculate days left until next Christmas.  Go to the editor

var today = new Date();
var came = new Date(today.getFullYear(), 7, 29);

var one_day=1000*60*60*24;
console.log(Math.ceil((came.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

////////10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

//////////12. Write a JavaScript program to get the website URL (loading page).  Go to the editor

alert("The URL of this page is: " + window.location.href);

//13. Write a JavaScript exercise to create a variable using a user-defined name.  Go to the editor

const var_name = 'abcd';
const n = 120;
this[var_name] = n;
console.log(this[var_name])

14. Write a JavaScript exercise to get the extension of a filename.
filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());



function difference(n)
{
   if (n <= 13)
       return 13 - n;
   else
       return (n - 13) * 2;
}
console.log(difference(32))
console.log(difference(11))


//////////////16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum
function mult(a,b){

    if(a === b){
       sum =  (a + b)*3;
       return sum;
    }else{
        sum =  (a + b);
        return sum;
    }
};

console.log(mult(20,20))

////////////19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 
function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
  
  console.log(testhundred(10));
  console.log(testhundred(90));
  console.log(testhundred(99));
  console.log(testhundred(199));
  console.log(testhundred(200));

 var first =  function(array, n) {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  };

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));



let arry = [2, 4, 6, 8, 10, 12, 14, 16];
let lastElement = arry[arry.length - 1];

console.log(lastElement);

if(lastElement == 16){
  console.log(lastElement);
}else{
  console.log(lastElement);

}*/