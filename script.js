const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const currentScreen = document.querySelector('.currentScreen');
const prevScreen = document.querySelector('.prevScreen');
const btns = document.querySelectorAll('.grid-item');

//declaring variables
let currentNum = '';
let prevNum = '';
let  operation = '';
//update display
function updateDisplay(){
  currentScreen.textContent = currentNum;
  if(operation != ''){
    prevScreen.textContent = `${prevNum} ${operation}`;
  }
}

//display number
function displayNum(number){
  if(number == '.' && currentNum.includes('.')) return;
  currentNum += number;
}

//display operation
function displayOp(op){
  if(currentNum == '') return;
  if(prevNum != '') {
    calculate();
  }
  operation = op;
  prevNum = currentNum;
  currentNum = '';
}

//calculate
function calculate(){
  let result;
  const prev = parseFloat(prevNum);
  const current = parseFloat(currentNum);
  if(isNaN(prev) || isNaN(current)) return;
  switch(operation) {
    case '+': result = add(prev,current); break;
    case '-': result = sub(prev,current); break;
    case 'x': result = mul(prev,current); break;
    case '/': result = div(prev,current); break;
    default: return;
  }
  currentNum = result;
  prevNum = '';
  operation = '';
}

function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function mul(a,b){
  return a*b;
}
function div(a,b){
  return a/b;
}

//clear everything
function allClear(){
  currentNum = '';
  prevNum = '';
  operation = '';
  prevScreen.textContent = '';
}

numbers.forEach(number=> {
  number.addEventListener('click', ()=>{
    displayNum(number.dataset.key);
    updateDisplay();
  })
})

operators.forEach(op=> {
  op.addEventListener('click', ()=>{
    displayOp(op.dataset.key);
    updateDisplay();
  })
})

equal.addEventListener('click', ()=>{
  calculate();
  updateDisplay();
})

clear.addEventListener('click', ()=>{
  allClear();
  updateDisplay();
})

del.addEventListener('click', ()=>{
  let a = currentScreen.textContent.split('').slice(0,-1);
  currentNum = a.join('');
  updateDisplay();
})

btns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.classList.add('red');
    setTimeout(()=>{
      btn.classList.remove('red');
    },100);
  })
})