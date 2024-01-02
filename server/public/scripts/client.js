console.log('client.js is sourced!');

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
        console.log('GET Response: ', response.data):
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
    const numOneElement = document.querySelector('#firstNumber');
    console.log(numOneElement);
    const numTwoElement = document.querySelector('#secondNumber');
    console.log(numTwoElement);
    const operatorElement = `${operationElement}`;
    const resultElement = `${numOneElement.value}${operatorElement.value}${numTwoElement.value}`;
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
    // clear fields
    numOneElement.value = '';
    numTwoElement.value = '';
    operatorElement.value = '';
    // clear DOM
    const calclationElement = document.querySelector('#recentResult');
    calclationElement.innerHTML = '';
    // GET new Data
    app.get();
  })
  .catch((error) => {
    console.log('ERROR: ', error);
  });
  }

  function operate(event) {
    event.preventDefault();
    console.log('Selected Operator');
    operatorElement = document.innerHTML;
  }