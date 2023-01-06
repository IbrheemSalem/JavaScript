let center = document.querySelectorAll(".center");

let st = document.querySelector(".header");

let face = document.querySelectorAll(".face");

let arr = [];
let duration = 500;


let inner = "X";
st.innerHTML = "X - O Game";
face.forEach((element) => {
    element;
    console.log(element);
        element.addEventListener('click' , function(){
            if(inner === "X"){
                inner = "O";
                element.innerHTML = "X";
                st.innerHTML = inner;
                corect()
            }else if(inner === "O"){
                inner = "X";
                element.innerHTML = "O";
                st.innerHTML = inner;
                corect()
            }
        });

    });

function  colorBack(num,num1,num2){
    let stop = document.querySelector('.center');

    for(let i = 1 ; i < 10 ; i++){
        arr[i] = document.getElementById("itm" + i).innerHTML;
        if(num == i ){
            document.getElementById('itm'+num).style.background = "green";
        }else if(num1 == i){
            document.getElementById('itm'+num1).style.background = "green";
        }else if(num2 == i){
            document.getElementById('itm'+num2).style.background = "green";
        }else{
            document.getElementById('itm'+i).style.background = "red";
        }
        st.style.background = "green";
        stop.classList.add("winner-none");
    }
}

function newheader(){
    if(st.innerHTML === "O"){
        st.innerHTML = "X";
        st.innerHTML =st.innerHTML + " " + `winner`;
    }else if(st.innerHTML === "X"){
        st.innerHTML = "O";
        st.innerHTML =st.innerHTML + " " + `winner`;
    }
    setInterval(function(){
        st.innerHTML += ".";
    },duration);
    setTimeout(function(){
        location.reload();
    },duration + 2000);
}

function corect(){
    for(let i = 1 ; i < 10 ; i++){
        arr[i] = document.getElementById("itm" + i).innerHTML;
        console.log(arr[i]);
    }
    if(arr[1] == arr[2] && arr[2] == arr[3] && arr[1] !== ''){
        colorBack(1,2,3);
        newheader();        
    }else if(arr[4] == arr[5] && arr[5] == arr[6] && arr[4] !== ''){
        colorBack(4,5,6);
        newheader();        
    }else if(arr[7] == arr[8] && arr[8] == arr[9] && arr[7] !== ''){
        colorBack(7,8,9);
        newheader();        
    }else if(arr[3] == arr[5] && arr[5] == arr[7] && arr[3] !== ''){
        colorBack(3,5,7);
        newheader();        
    }else if(arr[1] == arr[5] && arr[5] == arr[9] && arr[1] !== ''){
        colorBack(1,5,9);
        newheader();
    }else if(arr[1] == arr[4] && arr[4] == arr[7] && arr[1] !== ''){
        colorBack(1,4,7);
        newheader();        
    }else if(arr[2] == arr[5] && arr[5] == arr[8] && arr[2] !== ''){
        colorBack(2,5,8);
        newheader();        
    }else if(arr[3] == arr[6] && arr[6] == arr[9] && arr[3] !== ''){
        colorBack(3,6,9);
        newheader();      
    }else if(arr[7] == arr[8] && arr[8] == arr[9] && arr[7] !== ''){
        colorBack(7,8,9);
        newheader();   
    }else if(arr[1] !== '' && arr[2] !== '' && arr[3] !== '' && arr[4] !== '' && arr[5] !== '' && arr[6] !== '' &&
    arr[7] !== '' && arr[8] !== '' && arr[9] !== ''){
        st.innerHTML = "Not winner";
        st.style.background = "red";
        setInterval(function(){
            st.innerHTML += ".";
        },duration);
        setTimeout(function(){
            location.reload();
        },duration + 2000);
    }
}
