alert("pass 1 : 1234");
alert("pass 2 : 1212");

let butt = document.querySelector('button');
let nameUser = "";
let phone = '';
let id_Name = 0;
let money = 0;

function inFunc(){
    num1 = document.getElementById("pass").value;
        if(num1 == 1234){
            nameUser = 'Ibraheem';
            phone = '0789468554';
            id_Name = '1_0';
            money = 5000;
            document.querySelector(".show").style.display = "none";
            document.querySelector(".btn").style.visibility = "inherit";
            document.querySelector(".btn").style.visibility = "inherit";
            document.querySelector(".user").innerHTML = `Name : ${nameUser}`;
            document.querySelector(".phone").innerHTML = `phone : ${phone}`;
            document.querySelector(".ID").innerHTML = `ID : ${id_Name}`;
            document.querySelector(".money").innerHTML = `Money : $${money}`;

        }else if(num1 == 1212) {
            nameUser = 'Salem';
            phone = '0788888888';
            id_Name = '2_0';
            money = 3500;
            document.querySelector(".show").style.visibility = "hidden";
            document.querySelector(".btn").style.visibility = "inherit";
            document.querySelector(".btn").style.visibility = "inherit";
            document.querySelector(".user").innerHTML = `Name : ${nameUser}`;
            document.querySelector(".phone").innerHTML = `phone : ${phone}`;
            document.querySelector(".ID").innerHTML = `ID : ${id_Name}`;
            document.querySelector(".money").innerHTML = `Money : $${money}`;
        }else{
            alert("Not pass");
        }
}

let fifty = 3;    
let twenty = 2;
let ten = 4;
let five = 2;
let totalMoney = (fifty * 50) + (twenty * 20) + (ten * 10) + (five * 5);

console.log(totalMoney);

let result = 0;
let total = 0;
function calc(num){
    result = money - num;
    money = result;
    // result = 0;
    document.querySelector(".money").innerHTML = `Money : $${money}`;
    if(totalMoney > 1 ){
        if(num == 50){
            fifty = fifty - 1;
            document.querySelector('.fifty').innerHTML = `Result $50 => ${fifty}`;
            if(fifty == 0){
            document.querySelector(".fif").style.visibility = "hidden";
            }
            totalMoney = totalMoney - 50;
        }else if(num == 20){
            twenty = twenty - 1 ;
            document.querySelector('.twenty').innerHTML = `Result $20 => ${twenty}`;
            if(twenty == 0){
            document.querySelector(".tw").style.visibility = "hidden";
            }
            totalMoney = totalMoney - 20;
        }else if(num == 10){
            ten = ten - 1;
            document.querySelector('.ten').innerHTML = `Result $10 => ${ten}`;
            if(ten == 0){
            document.querySelector(".te").style.visibility = "hidden";
            }
            totalMoney = totalMoney - 10;
        }else if(num == 5){
            five = five - 1;
            document.querySelector('.five').innerHTML = `Result $5 => ${five}`;
            if(five == 0){
            document.querySelector(".fi").style.visibility = "hidden";
            }
            totalMoney = totalMoney - 5;
            console.log(totalMoney);
        }
    }else{
        alert("No Money");
    }
}











