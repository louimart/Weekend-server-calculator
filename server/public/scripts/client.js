console.log('client.js is sourced!');

function onReady() {
  getHistory();
}
onReady();
let operationElement = '';

// GET Current DATA
function getHistory(){
    console.log('in getHistory');
    // axios call to server to get Calculation History
    axios({
        method: 'GET',
        url: '/calculations',
    })
    .then(function (response) {
        console.log('GET Response: ', response.data);
        renderHistory(response.data);
    })
    .catch(function (error) {
        console.error('GET Error: ', error.message);
    });
} // end getHistory

function operate(event) {
    event.preventDefault();
    operationElement = document.innerHTML;
    console.log(operationElement);
}

function calc(event) {
    event.preventDefault();
    console.log('in CALCULATE');
    console.log(operationElement);
    const numOneElement = document.querySelector('#firstNumber');
    console.log(numOneElement.value);
    const numTwoElement = document.querySelector('#secondNumber');
    console.log(numTwoElement.value);
    const operatorElement = operationElement;
    console.log(operatorElement);
    const resultElement = `${numOneElement.value} ${operatorElement} ${numTwoElement.value}`;
    console.log(resultElement);
  
  const newCalcInput = {
    numOne: numOneElement.value,
    numTwo: numTwoElement.value,
    operator: operatorElement.value,
    result: resultElement
  }
  
  axios({
    method: 'POST',
    url: '/calculations',
    data: newCalcInput,
  })
  .then((response) => {
console.log('IN Axios POST Request')
    // clear fields
    numOneElement.value = '';
    numTwoElement.value = '';
    operatorElement.value = '';
    // clear DOM
    const calclationElement = document.querySelector('#recentResult');
    calclationElement.innerHTML = '';
    // GET new Data
    getHistory();
  })
  .catch((error) => {
    console.log('ERROR: ', error);
  });
  }

  function operate(event) {
    event.preventDefault();
    operatorElement = document.querySelector('.plus');
    console.log('Selected Operator', operatorElement.innerHTML);
    operationElement = operatorElement.innerHTML
    console.log(operationElement);
  }
