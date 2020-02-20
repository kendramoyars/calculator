const text = document.querySelector('.inOut');
const calcButtons = document.querySelectorAll('.calc');
const clearButton = document.querySelector('.clr');
const opButton = document.querySelector('.operate');
const negPosButton = document.querySelector('.negPos');
const delButton = document.querySelector('.del');

let displayValue = null;
let total = null;
let sum = null;
text.textContent = "";

function add (a, b) {
  numA = parseFloat(a);
  numB = parseFloat(b);
  return numA + numB;
}

function subtract (a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
   location.reload();
    alert(`You can't divide by zero silly!`);
  }
  return a / b;
}

function operate(operator, a, b) {
  if (operator === '+') {
  return add(a, b);
  } else if (operator === '-') {
  return subtract(a, b);
  } else if (operator === '*') {
  return multiply(a, b);
  } else if (operator === '/') {
  return divide(a, b);
  }
}

function handleDisplay(value) {
  if (displayValue === null) {
    text.textContent += value.key;
  } else {
    text.textContent = total+=value.key;
  }
}

// add event listeners on all buttons
function handleCalcButtonClick(event) {
  if (displayValue === null) {
    text.textContent += event.target.value;
  } else {
    text.textContent = total+=event.target.value;
  }

}

function handleClearButtonClick(event) {
  text.textContent = '';
  total = null;
  displayValue = null;
}

function handleNegButtonClick(event) {
  if (text.textContent === "") {
    alert('Enter a value first')
  }
  else {
    text.textContent = -text.textContent;
  }
}

function handleDelButtonClick(event) {
  const values = text.textContent;
  dispArray = values.trim().split('');
  dispArray.pop();
  text.textContent = dispArray.join('');
}
function handleKey(event) {
  if(event.keyCode == 49) { //1
    handleDisplay(event);
  } else if (event.keyCode == 50) { //2
    handleDisplay(event);
  } else if (event.keyCode == 51) { //3
    handleDisplay(event);
  } else if (event.keyCode == 52) { //4
    handleDisplay(event);
  } else if (event.keyCode == 53) { //5
    handleDisplay(event);
  } else if (event.keyCode == 54) { //6
    handleDisplay(event);
  } else if (event.keyCode == 55) { //7
    handleDisplay(event);
  } else if (event.keyCode == 56) { //8
    handleDisplay(event);
  } else if (event.keyCode == 57) { //9
    handleDisplay(event);
  } else if (event.keyCode == 48) { //0
    handleDisplay(event);
  } else if (event.keyCode == 187) { // +
    handleDisplay(event);
  } else if (event.keyCode == 189) { // -
    handleDisplay(event);
  } else if (event.keyCode == 56) { // *
    handleDisplay(event);
  }
  else if (event.keyCode == 191) { // /
    handleDisplay(event);
  } else if (event.keyCode == 13) { // = (using return instead)
    handleOpButtonClick();
  } else if (event.keyCode == 8) { // del
    handleDelButtonClick();
  }
}

function handleOpButtonClick(event) {
  displayValue = text.textContent;
  if (text.textContent === "") {
  
    alert('Enter some numbers into the calculator first!');
    
  }
  const values = displayValue.trim();
  const separators = ['-', '\\\+', '\\*', '\\/'];
  const valArray = values.split(new RegExp('(' + separators.join('|') + ')', 'g'));
  
  sum = operate(valArray[1], valArray[0], valArray[2]);
  valArray.shift();
  valArray.shift();
  valArray.shift();
 for (let i = valArray.length; i > 0; i-=2) {
   sum = operate(valArray[0], sum, valArray[1]);
   valArray.shift();
   valArray.shift();
 }
  total = sum;
  text.textContent = total.toFixed(2);
 
}

calcButtons.forEach(function(calcButton) {
  calcButton.addEventListener('click', handleCalcButtonClick);
});

clearButton.addEventListener('click', handleClearButtonClick);
opButton.addEventListener('click', handleOpButtonClick);
negPosButton.addEventListener('click', handleNegButtonClick);
delButton.addEventListener('click', handleDelButtonClick);
window.addEventListener('keydown', handleKey);