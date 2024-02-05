"use strict"



// DETERMINE NUMBER OF DICE

let numberOfDice = window.prompt("How many dice should be rolled? (1-5)", "");

numberOfDice = getInput(numberOfDice);

while (!isValid(numberOfDice)) {
    numberOfDice = window.prompt("Number of dice must be an integer between 1 and 5\nHow many dice should be rolled? (1-5)", "");
    numberOfDice = getInput(numberOfDice);
}

// In this function, I think it good to base on parseInt to take the input. Example: input = "4lkajdflkajdf" , I think it OK to take the input 4
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


let dices = [numberOfDice];
for ( let i = 0; i < numberOfDice; i++){
    dices[i] = Math.floor((Math.random() * 6) + 1);
}

for (let dice of dices){
    console.log(dice);
}


// function addPicture(string, dices){
//
//     for (let dice of dices){
//         switch(dice){
//             case 1:
//                 string += '<img src="../images/dice1.png" />';
//                 break;
//             case 2:
//                 string += '<img src="../images/dice2.png" />'
//                 break;
//             case 3:
//                 string += '<img src="../images/dice3.png" />'
//                 break;
//             case 4:
//                 string += '<img src="../images/dice4.png" />'
//                 break;
//             case 5:
//                 string += '<img src="../images/dice5.png" />'
//                 break;
//             case 6:
//                 string += '<img src="../images/dice6.png" />'
//                 break;
//             default:
//                 break;
//         }
//     }
//
// }

// let diceImages = document.getElementById("diceArea").innerHTML;
//
// diceImages += '<img src="../images/dice6.png" />'
// addPicture(diceImages, dices);





