const numButtons = document.getElementsByClassName('numbers');
const operators = document.getElementsByClassName('btn btn-secondary operators');
const display = document.getElementById('inp');
const equalSign = document.getElementById('equals');

var firstOperand;
// var operator = '';
// var secondOperand = 0;

firstOperand = () => {
    // let operand;
    for (let i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', () => {
            firstOperand += numButtons[i].value;
        });
    }
    // console.log(firstOperand);
    // return operand;
};
// getElement
// function getSecondOperand() {
//     for (let i = 0; i < numButtons.length; i++) {
//         numButtons[i].addEventListener('click', () => {
//             secondOperand += numButtons[i].value;
//         });
//     }
// }

// function getOperator() {
//     for (let i = 0; i < operators.length; i++) {
//         operators[i].addEventListener('click', () => {
//             operator = operators[i].value.toString();
//         });
//     }
// }

// function calculate() {
//     alert('Please only enter expressions in Operand operator operand format only');
//     getFirstOperand();
//     getOperator();
//     getSecondOperand();
//     console.log(firstOperand, operator, secondOperand);
//     // switch (operator) {
//     //     case '+':
//     //         // display.value = firstOperand + secondOperand;
//     //         console.log(firstOperand + secondOperand);
//     //         break;

//     //     default:
//     //         break;
//     // }
// }
// calculate();
// //below now i have accessed all numbers and operators and input
// // for (let i = 0; i < numButtons.length; i++) {
//     //     firstOperand = numButtons[i].value;
//     //     console.log(firstOperand);
//     // }

//     // for (let i = 0; i < operators.length; i++) {
//         //     operator = operators[i].value;
//         //     console.log(operator);
//         // }
//         // console.log(firstOperand);