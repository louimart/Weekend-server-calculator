console.log('client.js is sourced!');

function calc(event) {
    event.preventDefault();
    console.log('in CALCULATE');
    const numOneElement = document.querySelector('#firstNumber');
    const numTwoElement = document.querySelector('#secondNumber');
    const operatorElement = document.querySelector('#');
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