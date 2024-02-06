"use strict"

// NAME: TRAN, NGUYEN HONG THAI

// Variables
let numberOfDice = window.prompt("How many dice should be rolled? (1-5)", "");
let dices = [numberOfDice];
let previousRollArray = [];
let currentRoll = dices;
let last10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let diceImages = document.getElementById("diceArea");
let pTotalRolls = document.getElementById("pTotalRolls");
let tblStats = document.getElementById("tblStats");
let btnRoll = document.getElementById("btnRoll");
let pRolled = document.getElementById("pRolled");
let pPreviousTenRolls = document.getElementById("pPreviousTenRolls");


// Functions
function getInput(s){
    if (s == null ){
        window.alert("Take default value: Roll 2 Dices.")
        return 2;
    } else {
        s = parseInt(s);
        if (s >= 1 && s <= 5){
            return s;
        } else {
            return 'NaN';
        }
    }
}
function isValid(s){
    return !isNaN(parseInt(s));
}
function createTable(tblStats, numberOfDice, previousRollArray, pTotalRolls){
    pTotalRolls.innerHTML = '';
    pTotalRolls.innerHTML = 'My statistics for a total of ' + previousRollArray.length + ' rolls:'
    
    tblStats.innerHTML = '';
    tblStats.innerHTML += '<tr><th>Roll</th><th>Frequency</th><th>Percent of Total Rolls</th></tr>';

    for (let i = numberOfDice; i <= numberOfDice*6; i++){

        let frequency = getFrequency(i, previousRollArray);
        let percent = isNaN(getFrequency(i, previousRollArray) / previousRollArray.length) ? 0 : getFrequency(i, previousRollArray) / previousRollArray.length * 100;
        tblStats.innerHTML += '<tr><td>' + i + '</td><td>' + frequency + '</td><td>' + percent.toFixed(3) + '%</td></tr>';
    }  
}
function roll(){
    for ( let i = 0; i < numberOfDice; i++){
        dices[i] = Math.floor((Math.random() * 6) + 1);
    }
    // console.log(dices);
}          
function printImage(diceArea, dices){

    diceArea.innerHTML = '';

    let string = '';

    for (let i = 0; i < dices.length; i++){
        switch(dices[i]){
        
            case 1:
                string += '<img id="image' + (i + 1) + '" src="images/dice1.png" alt="dice' + (i + 1) +'" />';
                break;
            case 2:
                string += '<img id="image' + (i + 1) + '" src="images/dice2.png" alt="dice' + (i + 1) +'" />'
                break;
            case 3:
                string += '<img id="image' + (i + 1) + '" src="images/dice3.png" alt="dice' + (i + 1) +'" />'
                break;
            case 4:
                string += '<img id="image' + (i + 1) + '" src="images/dice4.png" alt="dice' + (i + 1) +'" />'
                break;
            case 5:
                string += '<img id="image' + (i + 1) + '" src="images/dice5.png" alt="dice' + (i + 1) +'" />'
                break;
            case 6:
                string += '<img id="image' + (i + 1) + '" src="images/dice6.png" alt="dice' + (i + 1) +'" />'
                break;
            default:
                break;
        }
    }
    diceArea.innerHTML = string;

}
function rollOneTime(){
    btnRoll.disabled = false
    printImage(diceImages, currentRoll);
    currentRoll = dices;

    let score = total(currentRoll);

    pRolled.innerHTML = '<strong>You rolled '+ score +'!</strong>';
    addToPrevious(score, last10);
    previousRollArray.push(score);

    pPreviousTenRolls.innerHTML = 'The previous 10 rolls were: ' + toStringReformat(last10);

    createTable(tblStats, numberOfDice, previousRollArray, pTotalRolls);
}
function total(array){
    let total = 0;
    for (let x of array){
        total += x;
    }
    return total;
}
function addToPrevious(num, last10){
    last10.shift();
    last10.push(num);
}
function toStringReformat(array){
    let string ='';
    for (let num of array){
        string += num +", ";
    }
    return string.substring(0,(string.length-2));
}
function getFrequency(num, array){
    let count = 0;
    for (let x in array){
        if (array[x] === num){
            count++;
        }
    }
    return count;
}

/// DETERMINE NUMBER OF DICE
numberOfDice = getInput(numberOfDice);
while (!isValid(numberOfDice)) {
    numberOfDice = window.prompt("Number of dice must be an integer between 1 and 5\nHow many dice should be rolled? (1-5)", "");
    numberOfDice = getInput(numberOfDice);
}

/// DEFAULT PAGE
////// Default dice value
for (let i = 0; i < numberOfDice; i++){
    dices[i] = 6;
}
printImage(diceImages, dices);
createTable(tblStats, numberOfDice, previousRollArray, pTotalRolls);
// Start update roll
setInterval(roll, 100);

///PLAY
btnRoll.addEventListener('click', () => {
    btnRoll.disabled = true;
    setTimeout(rollOneTime, 1000);   
})