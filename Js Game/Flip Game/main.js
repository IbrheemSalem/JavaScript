function startGame(){
    document.querySelector(".button2").style.display = 'none';
    document.querySelector(".continer").style.display = 'none';
}


let duration = 1000;

let memoryGameBlocks = document.querySelector(".memory-game-blocks");

let gameBlock = Array.from(memoryGameBlocks.children);
//console.log(gameBlock);

//let orderRange = Array.from(Array(blocks.length).keys());
let orderRange = [...Array(gameBlock.length).keys()];
console.log(orderRange);
shuffle(orderRange);



// insert order game Block 
gameBlock.forEach((block,index) =>{
    block.style.order = orderRange[index];

    block.addEventListener('click', function () {
        rotateImg(block);
    });
});

function rotateImg(selectimg){
    selectimg.classList.add("is-flipped");

    let allFlip = gameBlock.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if(allFlip.length === 2){
        stopClicking();

        Match(allFlip[0],allFlip[1]);
    }

}

function stopClicking() {

    memoryGameBlocks.classList.add('no-clicking');
    setTimeout(() => {
    memoryGameBlocks.classList.remove('no-clicking');
    }, duration);

}

function Match(firstImg, secondImg) {

    if(firstImg.dataset.img === secondImg.dataset.img){
        firstImg.classList.remove('is-flipped');
        secondImg.classList.remove('is-flipped');

        firstImg.classList.add('has-match');
        secondImg.classList.add('has-match');
    }else{
        setTimeout(() => {

            firstImg.classList.remove('is-flipped');
            secondImg.classList.remove('is-flipped');
        }, duration);
    }

}

function shuffle(array) {

    // Settings Vars
    let current = array.length,
        temp,
        random;

    while (current > 0) {
        
    random = Math.floor(Math.random() * current);

    current--;

    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
    }
    return array;
}

/*#############################################################################*/