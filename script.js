let result = document.getElementById('calculator_nav_result');
let startNumber = '';
let operator = '';
let endNumber = '';
const operators = ['+', '-', '*', '/', '%'];
function handleNumberClick(event) {
  let value = event.innerText;
  if (operators.includes(value)) {
    if (startNumber && endNumber) {
      handleResult();
    }
    if (operators.includes(result.innerText[result.innerText.length - 1])) {
      return;
    }
    operator = value;
  } else {
    if (operator) {
      endNumber += value;
    } else {
      startNumber += value;
    }
  }

  if (result.innerText === '0') {
    if (!operators.includes(value)) {
      result.innerText = value;
    }
  } else {
    if (
      operators.includes(value) &&
      operators.includes(result.innerText[result.innerText.length - 1])
    ) {
      return;
    }
    result.innerText += value;
  }
}

function handleResult() {
  let firstNum = Number(startNumber);
  let secondNum = Number(endNumber);
  if (firstNum === 6789) {
  }
  switch (operator) {
    // window.location.href = 'secret.html';
    case '+':
      result.innerText = firstNum + secondNum;

      break;
    case '-':
      result.innerText = firstNum - secondNum;

      break;
    case '*':
      result.innerText = firstNum * secondNum;

      break;
    case '/':
      result.innerText = firstNum / secondNum;

      break;
    case '%':
      result.innerText = (firstNum / 100) * secondNum;

      break;

    default:
      break;
  }
  startNumber = result.innerText;
  endNumber = '';
  operator = '';
}
function deleteInput() {
  startNumber = '';
  endNumber = '';
  operator = '';
  result.innerText = 0;
}
