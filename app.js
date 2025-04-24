const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.num');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const tablo = document.querySelector('#tablo');

let num1 = 0;
let num2 = 0;
let operator = '';
let inputStatus = false;

// ************************** listener *********************************
operators.forEach(
    (o) => {
        o.addEventListener('click', (e) => { input(e.target.textContent); });
    });

numbers.forEach(
    (n) => {
        n.addEventListener('click', function (e) {
            !inputStatus && clearTablo();
            addToTablo(e.target.textContent);
            checkZero();
        })
    });

dot.addEventListener('click', () => {
    inputStatus = true;
    addToTablo('.');
})

equal.addEventListener('click', () => { toEqual() });

clear.addEventListener('click', () => { clearAll() });

// ************************** functions *********************************
function addToTablo(simbol) {
    tablo.textContent += (simbol);
}

function checkZero() {
    (tablo.textContent === '0') ? inputStatus = false : inputStatus = true;
}

function setZero() {
    tablo.textContent = '0';
}

function clearTablo() {
    tablo.textContent = '';
}

function clearNumber() {
    num1 = 0;
    num2 = 0;
}

function clearOperator() {
    operator = '';
}

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
        case '-':
            return parseFloat(num1) - parseFloat(num2);
        case '*':
            return parseFloat(num1) * parseFloat(num2);
        case '/':
            return parseFloat(num1) / parseFloat(num2);
    }
}

function input(newOperator) {
    if (operator.length > 0) {
        num2 = tablo.textContent;
        num1 = operate(num1, operator, num2);
        operator = newOperator;
        num2 = 0;
        clearTablo();
        addToTablo(num1);
    } else {
        num1 = tablo.textContent;
        operator = newOperator;
    }
    inputStatus = false;
}

function toEqual() {
    if (operator === '') {
        return false;
    }
    num2 = tablo.textContent;
    clearTablo();
    addToTablo(operate(num1, operator, num2));
    clearNumber();
    clearOperator();
    inputStatus = false;
}

function clearAll() {
    setZero();
    clearNumber();
    clearOperator();
}