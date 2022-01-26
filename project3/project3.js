


let historyArray = []; // the guess history


const input1 = document.querySelector('input');
const resetBtn = document.querySelector('button.resetBtn');
const checkBtn = document.querySelector('button.checkBtn');
const guessText = document.querySelector('p.guessText');
const scoreText = document.querySelector('span.scoreText');
const returnBtn = document.querySelector("button.returnBtn");
const guessBox = document.querySelector("div.guessBox");
const imgDisplay = document.getElementById("imgDisplay");
const winCase =  document.querySelector("div.winCase");
const loseCase = document.querySelector("div.loseCase");
const scoreBox = document.querySelector("div.scoreBox");
const historyText = document.querySelector("div.guessHistoryBox");
const list = document.querySelector("ul");
const highScoreText = document.querySelector("span.highScoreText");


let inputNum = 0;
let scoreNum = 0;
let secretNum ;
let highScore = 0;
scoreNum = Number(scoreText.textContent);

let textnode1; //create the number inside the line for mylist

// change highSore
function highScoreCheck(){
    if (scoreNum > highScore){
        highScore = scoreNum;
        highScoreText.textContent = highScore;
        // console.log(inputNum); // 
    }
        
}
// remove the guess history
let removeInputNum = () =>{
     while (list.firstChild) {
         list.removeChild(list.firstChild);
    }
}
// add the guess History
function addInputNum(num){
    let node = document.createElement("li");
    textnode1 = document.createTextNode(num);
    node.appendChild(textnode1);
    document.getElementById("myList").appendChild(node)
}
//Setting up the beggining screen
function origionalBox(){
    guessBox.style.backgroundColor = "";
    imgDisplay.src = "images/thinkingImage.gif";
    input1.style.opacity = "";
    input1.disabled = "";
    checkBtn.style.opacity = "";
    checkBtn.disabled = "";
    resetBtn.style.opacity = "";
    guessText.style.opacity = "";
    guessText.textContent = "Guess a number";
    scoreBox.style.opacity = "";
    returnBtn.disabled = true;
    returnBtn.style.opacity = 0;
    winCase.style.opacity = 0;
    loseCase.style.opacity = 0;
    scoreNum = 10;
    scoreText.textContent = 10;
    removeInputNum();
    secretNum = Math.trunc(Math.random() * 100 + 1);
    console.log(secretNum);
    //empty array
    historyArray =[];



   
}


function winBox () {
    //change background colors
    guessBox.style.backgroundColor = "lightgreen";
    //change img
   imgDisplay.src = "images/win.gif";
    //disable input
    input1.style.opacity = 0;
    input1.disabled = true;
    //disable button
    checkBtn.style.opacity = 0;
    checkBtn.disabled = true;
    //hide reset button
    resetBtn.style.opacity = 0;
    //hide the guessText
    guessText.style.opacity = 0;
    //hide scoreBox
    scoreBox.style.opacity = 0;
    //show returnBtn
    returnBtn.style.opacity = 1;
    returnBtn.disabled = false;
    //show new text
    winCase.style.opacity = 1;
    highScoreCheck();
    //change text
    document.querySelector("span.secretNum").textContent = secretNum;
    document.querySelector("span.yourScore").textContent = scoreNum;
    document.querySelector("p.bestTextScore").textContent = `Best Score:${highScore}`;
   

}
// will check to see if the user enter the number before
const checkArraySameNum = function(num){
    for ( let i = 0; i < historyArray.length ; i++){
       if(num === historyArray[i])
          return false;
    }     
    return true;     
        
};
function loseBox (){
    //change background colors
    guessBox.style.backgroundColor = "lightgrey";
    //change img
    imgDisplay.src = "images/lose.gif";
    //disable input
    input1.style.opacity = 0;
    input1.disabled = true;
    //disable button
    checkBtn.style.opacity = 0;
    checkBtn.disabled = true;
    //hide reset button
    resetBtn.style.opacity = 0;
    //hide the guessText
    guessText.style.opacity = 0;
    //show returnBtn
    returnBtn.style.opacity = 1;
    returnBtn.disabled = false;
    //show new text
    loseCase.style.opacity = 1;
    //change text
    document.querySelector("span.secretNum2").textContent = secretNum;

}
resetBtn.addEventListener('click', function(){
    origionalBox();
    highScore = 0;
    highScoreText.textContent = 0;

});
returnBtn.addEventListener('click', function(){
    origionalBox();
});
checkBtn.addEventListener('click', function(){
    inputNum = Number(input1.value);
    //check if it the same number
    if(checkArraySameNum(inputNum) && inputNum <= 100 && inputNum > 0){
        addInputNum(inputNum);
        historyArray.push(inputNum);


        if (inputNum > secretNum){
            guessText.textContent = "Your number is high";
            scoreNum--;
            scoreText.textContent = scoreNum;
    
        }
        else if( inputNum < secretNum){
            guessText.textContent = "Your number is low";
            scoreNum--;
            scoreText.textContent = scoreNum; 
        }

        if(scoreNum === 0){
            loseBox();
        }
        else if(inputNum === secretNum){
        winBox();
        }

    }
    else if(isNaN(inputNum) || inputNum <= 0 || inputNum > 100) {
        guessText.textContent = "You can only enter numbers between 1 and 100";
    }
    else{
        guessText.textContent = "You enter the same number";
    }
    // clear input number
    input1.value = "";  
});



//origional screen
origionalBox();
// console.log(secretNum);
// console.log(historyArray.length);