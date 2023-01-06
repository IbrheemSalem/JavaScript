let outputNum = document.getElementById('output');
let result = document.getElementById('result');
let dot = document.querySelector(".dot");

let operType = '';
let isBigNumber = false;
let values = {prev: null , new: null , result: null}

function getClear(){
    outputNum.value = ' ';
    isBigNumber = false;
    return;
}

function getDelet(){
    outputNum.value = outputNum.value.slice(0,outputNum.value.length-1);
    values.prev = outputNum.value
    return;
}

function getNumber(num){

    if(isBigNumber){
        let resultNum;
        if(values.new){
            resultNum = values.new + "" + num;
            values.new = resultNum;
            outputNum.value = resultNum
        }else{
            resultNum = values.prev + "" + num;
            values.prev = resultNum;
            outputNum.value = resultNum
        }
    }else{
        if(num === '.'){
            let dpt = num.slice(0,1);
            outputNum.value = dpt;
        }else{
            outputNum.value = num;
            if(values.prev){
                values.new = num;
            }else{
                values.prev = num;
            }
            isBigNumber = true;       
        }
 
    }
}

function getOperation(operator){
    outputNum.value = operator;
    operType = operator;
    isBigNumber = false;
}


function calculator(){
    if(!values.new){
        return;
    }
    if(values.prev && values.new && operType){
        let newValue;
        if(operType === '+'){
            newValue = Number(values.prev) + Number(values.new);
            outputNum.value = newValue;
            values.prev = 0;
            values.new = 0;
        }else if(operType === '*'){
            newValue = Number(values.prev) * Number(values.new);
            outputNum.value = newValue;
            values.prev = 0;
            values.new = 0;
        }else if(operType === '/'){
            newValue = Number(values.prev) / Number(values.new);
            outputNum.value = newValue;
            values.prev = 0;
            values.new = 0;
        }else if(operType === '-'){
            newValue = Number(values.prev) - Number(values.new);
            outputNum.value = newValue;
            values.prev = 0;
            values.new = 0;
        }else if(operType === '%'){
            newValue = Number(values.prev) % Number(values.new);
            outputNum.value = newValue;
            values.prev = 0;
            values.new = 0;
        }
        isBigNumber = false;
    }

}