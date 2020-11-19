const displayScreen = document.getElementById("screen");

function update(n) {
  displayScreen.textContent += n;
}

function displayResult() {
  let str=displayScreen.textContent;
  let a=str.split(/[+-/x/]/);
  let operation=str.split(/\d+/);
  displayScreen.textContent = operate(operation[1],a[0],a[1]);
};

function add(a,b) {
  return parseInt(a)+parseInt(b);
};

function sub(a,b) {
  return parseInt(a)-parseInt(b);
};

function mul(a,b) {
  return parseInt(a)*parseInt(b);
};

function div(a,b) {
  return parseInt(a)/parseInt(b);
};

function operate(op,a,b) {
  switch(op) {
    case '+' : 
    return add(a,b);
    case '-' : 
    return sub(a,b);
    
    case 'x' : 
    return mul(a,b);
    
    case '/' : 
    return div(a,b);
    
    default: return 'something wrong';

  }
};

