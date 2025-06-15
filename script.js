var input = document.getElementById('calculator_nav_result');
function deleteInput() {
  input.innerText = ' ';
}
function oneN() {
  var thisValue = document.getElementById('calculator_nav_1');
  input.innerText += 1 || thisValue.value;
  console.log(thisValue);
}
function twoN() {
  var two = document.getElementById('calculator_nav_2');
  input.innerText += 2;
  console.log(two.value);
}
function three() {
  var three = document.getElementById('calculator_nav_3');
  input.innerText += 3;
}
function four() {
  var four = document.getElementById('calculator_nav_4');
  input.innerText += 4;
}
function fife() {
  var fife = document.getElementById('calculator_nav_5');
  input.innerText += 5;
}
function six() {
  var six = document.getElementById('calculator_nav_6');
  input.innerText += 6;
}
function seven() {
  var seven = document.getElementById('calculator_nav_7');
  input.innerText += 7;
}
function eight() {
  var eight = document.getElementById('calculator_nav_8');
  input.innerText += 8;
}
function nine() {
  var nine = document.getElementById('calculator_nav_9');
  input.innerText += 9;
}
function result() {
  let a = input.innerHTML.split('');
  a.map((item, index, arr) => {
    console.log(arr.slice(1));
    switch (item) {
      case '/':
        switch (arr.length) {
          case 6:
            input.innerHTML =
              Number(arr[0] + arr[1] + arr[2]) / Number(arr[4] + arr[5]);
            break;
          case 4:
            input.innerHTML = Number(arr[1]) / Number(arr[3]);
            break;
          case 5:
            input.innerHTML = Number(arr[0] + arr[1] + arr[2]) / Number(arr[4]);
            break;
        }
        break;
      case '-':
        switch (arr.length) {
          case 6:
            input.innerHTML =
              Number(arr[0] + arr[1] + arr[2]) - Number(arr[4] + arr[5]);
            break;
          case 4:
            input.innerHTML = Number(arr[1]) - Number(arr[3]);
            break;
          case 5:
            input.innerHTML = Number(arr[0] + arr[1] + arr[2]) - Number(arr[4]);
            break;
        }
        break;
      case '*':
        switch (arr.length) {
          case 6:
            input.innerHTML =
              Number(arr[0] + arr[1] + arr[2]) * Number(arr[4] + arr[5]);
            break;
          case 4:
            input.innerHTML = Number(arr[1]) * Number(arr[3]);
            break;
          case 5:
            input.innerHTML = Number(arr[0] + arr[1] * arr[2]) / Number(arr[4]);
            break;
        }

        break;
      case '+':
        switch (arr.length) {
          case 6:
            input.innerHTML =
              Number(arr[0] + arr[1] + arr[2]) + Number(arr[4] + arr[5]);
            break;
          case 4:
            input.innerHTML = Number(arr[1]) + Number(arr[3]);
            break;
          case 5:
            input.innerHTML = Number(arr[0] + arr[1] + arr[2]) / Number(arr[4]);
            break;
        }
        break;
    }
  });
}
function plus() {
  const plus = document.getElementById('calculator_nav_plus');
  input.innerText += '+' || plus.value;
}
function kopaytirish() {
  const kopaytirish = document.getElementById('calculator_nav_x');
  input.innerText += '*' || kopaytirish.value;
}

function bulish() {
  const bulish = document.getElementById('calculator_nav_plus');
  input.innerText += '/' || bulish.value;
}

function minus() {
  const ayirish = document.getElementById('calculator_nav_minus');
  input.innerText += '-' || ayirish.value;
}
