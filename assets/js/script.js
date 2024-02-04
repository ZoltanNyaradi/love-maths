document.addEventListener("DOMContentLoaded", function() {
    let buttons= document.getElementsByTagName("button");
    for(let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("data-type")==="submit"){
                checkAsnwer()
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */
function runGame(gameType){
    // Creats two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2)
    } else {
        alert(`Unknow game type: ${gameType}`);
        throw `Unknow game type: ${gameType}. Aborting`;
    }
}

/**
 * Check the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAsnwer(){
    let userAnswer = document.getElementById("answer-box").value;
    let calculatedAnswer = calculateCorrectAnswer();
    if (userAnswer==calculatedAnswer[0]) {
        alert("Hey! You got it right! :D")
    } else {
        alert(`Awwww.... you answred ${userAnswer}. The correct answer was ${calculatedAnswer}!`);
    }
    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and return the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return [ operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}`;
    }
}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}
