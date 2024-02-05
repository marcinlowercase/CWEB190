"use strict"



// DETERMINE NUMBER OF DICE

let numberOfDice = window.prompt("How many dice should be rolled? (1-5)", "");

numberOfDice = getInput(numberOfDice);

while (!isValid(numberOfDice)) {
    numberOfDice = window.prompt("Number of dice must be an integer between 1 and 5\nHow many dice should be rolled? (1-5)", "");
    numberOfDice = getInput(numberOfDice);
}

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
    if (!isNaN(parseInt(s))){
        return true;
    } else {
        return false;
    }
}



// Generate the dice images and the initial frequency table


// 1 role
let dices = [numberOfDice];
for ( let i = 0; i < numberOfDice; i++){
    dices[i] = Math.floor((Math.random() * 6) + 1);
}

console.log(dices);


            
function printImage(string, dices){

    for (let dice of dices){
        switch(dice){
            case 1:
                string.innerHTML += '<img src="images/dice1.png" />';
                break;
            case 2:
                string.innerHTML += '<img src="images/dice2.png" />'
                break;
            case 3:
                string.innerHTML += '<img src="images/dice3.png" />'
                break;
            case 4:
                string.innerHTML += '<img src="images/dice4.png" />'
                break;
            case 5:
                string.innerHTML += '<img src="images/dice5.png" />'
                break;
            case 6:
                string.innerHTML += '<img src="images/dice6.png" />'
                break;
            default:
                break;
        }
    }

}


let diceImages = document.getElementById("diceArea");

printImage(diceImages, dices);




// diceImages.innerHTML += '<img src="images/dice3.png" />';
// diceImages.innerHTML += '<img src="images/dice4.png" />';



// document.getElementById("diceArea").innerHTML = '<img src="images/dice6.png" alt="dice6" />';
