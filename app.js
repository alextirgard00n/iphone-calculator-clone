const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const value = document.querySelector('.value');

//global variables
let currentDisplay = value.textContent;
let firstNum = '';
let secondNum = '';
let currentOperand = '';
let continuousOperation = false;

// current signature year update
let currYear = document.querySelector('.currYear');
currYear.textContent = new Date().getFullYear();


// Set up the time
const updateTime = () => {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    if (currentHour > 12) {
        if (currentHour === 24) {
            currentHour = 12;
        } else {
            currentHour -= 12;
        }
    }
    hour.textContent = currentHour.toString();
    minute.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();



const numBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const acBtn = document.querySelector('.ac');
const pmBtn = document.querySelector('.pm');
const equalBtn = document.querySelector('.equal');
const percentBtn = document.querySelector('.percent');

numBtn.forEach(btn => btn.addEventListener('click', numBtnClick));
operatorBtn.forEach(btn => btn.addEventListener('click', operatorBtnClick));
acBtn.addEventListener('click', resetCalculator);
pmBtn.addEventListener('click', plusMinusModifier);
equalBtn.addEventListener('click', operateBtn);
percentBtn.addEventListener('click', percentBtnModifier);


// const btnHandle = document.querySelectorAll('.button');
// btnHandle.forEach(btn => btn.addEventListener('click', btnClick));

function numBtnClick() {
    if (value.textContent === '0') {
        value.textContent = this.textContent;
    } else {
        value.textContent += this.textContent;
    }
}

function operatorBtnClick() {
    if (!firstNum) {
        firstNum = value.innerHTML;
        currentOperand = this.textContent;
        value.textContent = 0;
        return;
    }

    // if (!secondNum && !currentOperand) {
    //     value.textContent = 0;
    // }
    if (!secondNum) {
        // currentOperand = this.textContent;
        // value.textContent = 0;
        secondNum = value.textContent;
        // operateBtn();
    }
}

function plusMinusModifier() {
    value.textContent = Number(value.textContent) * -1;
}

function percentBtnModifier() {
    value.textContent = Number(value.textContent) * .01;
}

function resetCalculator() {
    value.textContent = 0;
    firstNum = '';
    secondNum = '';
    currentOperand = '';
    continuousOperation = false;
}

// function roundResult(number) {
//     return Math.round(number * 1000) / 1000;
// }

// function btnClick() {
//     // console.log(this.innerHTML);
//     // console.log(this.classList.value);
//     value.innerHTML = this.textContent;
//     currentDisplay = value.textContent;
// }

function operateBtn() {
    if (firstNum === '' && secondNum === '' && !currentOperand === '') {
        return;
    }
    value.textContent = operate(currentOperand, firstNum, secondNum);
    // firstNum = value.textContent;
    firstNum = '';
    secondNum = '';
    currentOperand = '';
    continuousOperation = true;
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case 'x':
            return a * b
        case '÷':
            if (b === 0) {
                return 'lmao';
            } else {
                return a / b;
            }
        default:
            return null
    }
}

// function add(a, b) {
//     return a + b
// }

// function substract(a, b) {
//     return a - b
// }

// function multiply(a, b) {
//     return a * b
// }

// function divide(a, b) {
//     return a / b
// }