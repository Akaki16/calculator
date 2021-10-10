'use strict';

// UI variables
const inputs = document.querySelectorAll('.inp');
const numInput = document.getElementById('num-value');
const btns = document.querySelectorAll('button');

const firstNum = document.getElementById('first-num');
const op = document.getElementById('op');
const secondNum = document.getElementById('second-num');

const calculateBtn = document.querySelector('.calculate-btn');
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');

const disableInputs = () => {
    inputs.forEach((input) => {
        input.disabled = true;
    });
}

const setOperation = (operation) => {

    if (operation === 'add') {
        firstNum.style.display = 'block';
        firstNum.value += numInput.value;
        numInput.value = '';
        op.style.display = 'block';
        op.value = '+';
    }

    if (operation === 'divide') {
        firstNum.style.display = 'block';
        firstNum.value += numInput.value;
        numInput.value = '';
        op.style.display = 'block';
        op.value = '/';
    }

    if (operation === 'minus') {
        firstNum.style.display = 'block';
        firstNum.value += numInput.value;
        numInput.value = '';
        op.style.display = 'block';
        op.value = '-';
    }

    if (operation === 'mult') {
        firstNum.style.display = 'block';
        firstNum.value += numInput.value;
        numInput.value = '';
        op.style.display = 'block';
        op.value = '*';
    }

    if (operation === 'remainder') {
        firstNum.style.display = 'block';
        firstNum.value += numInput.value;
        numInput.value = '';
        op.style.display = 'block';
        op.value = '%';
    }
    
}

// make operation functions
const add = (a, b) => {
    let result = Number(a.value) + Number(b.value);
    return result;
}

const divide = (a, b) => {
    let result = Number(a.value) / Number(b.value);
    return result;
}

const subtract = (a, b) => {
    let result = Number(a.value) - Number(b.value);
    return result;
}

const multiply = (a, b) => {
    let result = Number(a.value) * Number(b.value);
    return result;
}

const remainder = (a, b) => {
    let result = Number(a.value) % Number(b.value);
    return result;
}

const operate = (operator) => {

    if (operator.value === '+') {
        let result = add(firstNum, secondNum);
        numInput.value = '';
        numInput.value += result;
    } else if (operator.value === '/') {
        let result = divide(firstNum, secondNum);
        numInput.value = '';
        numInput.value += result;
    } else if (operator.value === '-') {
        let result = subtract(firstNum, secondNum);
        numInput.value = '';
        numInput.value += result;
    } else if (operator.value === '*') {
        let result = multiply(firstNum, secondNum);
        numInput.value = '';
        numInput.value += result;
    } else {
        let result = remainder(firstNum, secondNum);
        numInput.value = '';
        numInput.value += result;
    }

}

const clearAll = () => {
    numInput.value = '';
    firstNum.value = '';
    op.value = '';
    secondNum.value = '';
    firstNum.style.display = 'none';
    op.style.display = 'none';
    secondNum.style.display = 'none';
}

const clearNumberInput = () => {
    numInput.value = numInput.value.toString().slice(0, -1);
}

const avoidDivideByZero = () => {
    if (firstNum.value === '0' || secondNum.value === '0' && op.value === '/') {
        alert('You cannot divide by zero!');
        numInput.value += '';
    }
}

// main function
const CALCULATOR = () => {

    disableInputs();

    let num;
    let operation;

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            num = e.target.dataset.key;
            operation = e.target.dataset.value;

            if (e.target.dataset.key) {
                numInput.value += num;
            }

            setOperation(operation);

        });
    });

    // calculate
    calculateBtn.addEventListener('click', () => {
        secondNum.value += numInput.value;
        if (secondNum.value === '') {
            // do nothing
            return;
        } else {
            secondNum.style.display = 'block';
            operate(op);
        }

        // validate
        avoidDivideByZero();
    });

    // clear all fields
    clearBtn.addEventListener('click', () => {
        clearAll();
    });

    deleteBtn.addEventListener('click', () => {
        clearNumberInput();
    });
}

CALCULATOR();