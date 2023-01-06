const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const value = document.querySelector('.value');

//global variables
continuousOperation = false;
operatorSelected = false;
let array = [];

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
equalBtn.addEventListener('click', equalBtnClick);
percentBtn.addEventListener('click', percentBtnModifier);

function numBtnClick() {
    if (continuousOperation) {
        value.textContent = this.textContent;
        continuousOperation = false;
        return;
    }
    if (value.textContent === '0') {
        value.textContent = this.textContent;
    } else {
        value.textContent += this.textContent;
    }
}

function operatorBtnClick() {
    if (array.length === 0) { //initial number
        array.push(value.textContent);
        array.push(this.textContent);
        value.textContent = 0;
    } else if (array.length === 1) {
        // value.textContent = 0;
        array[1] = this.textContent;
    } else if (array.length === 2) {
        equalBtnClick();
        value.textContent = array[0];
        array.push(this.textContent);
    }
}


function equalBtnClick() {
    if (array.length !== 2) {
        return;
    }
    array.push(value.textContent);
    value.textContent = operate(array[1], array[0], array[2]);
    array.splice(0, 2);
    array[0] = value.textContent;
    continuousOperation = true;
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
    array = [];
    continuousOperation = false;
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