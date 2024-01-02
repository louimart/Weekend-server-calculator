const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = []
calculations = [
  {
    numOne: 3,
    numTwo: 5,
    operator: '+',
    result: 8
  },
  {
    numOne: 11,
    numTwo: 7,
    operator: '-',
    result: 4
  }
]


// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
  console.log('GET request made for /calculations');
  res.send(calculations);
}) // END of GET Route

// POST /calculations
app.post('/calculations', (req, res) => {
  console.log('POST request made for /calculations');
  const calcToAdd = req.body;
  
  if (
    calcToAdd.numOne == null ||
    calcToAdd.numTwo == null ||
    calcToAdd.operator == null
  ){
    console.log('error', req.body);
    res.sendStatus(400);
    return;
  } else {}
  console.log(req.body);

  calculations.push(calcToAdd);
  res.sendStatus(201);
}) // END of POST Route

// function calc(event) {
//   event.preventDefault();
//   console.log('in CALCULATE');
//   const numOneElement = document.querySelector('#');
//   const numTwoElement = document.querySelector('#');
//   const operatorElement = document.querySelector('#');
//   const resultElement = `${numOneElement.value}${operatorElement.value}${numTwoElement.value}`;
//   console.log(resultElement);

// const newCalcInput = {
//   numOne: numOneElement.value,
//   numTwo: numTwoElement.value,
//   operator: operatorElement.value,
//   result: resultElement
// }

// axios({
//   method: 'POST',
//   url: '/calculations',
//   data: newCalcInput,
// })
// .then((response) => {
//   // clear fields
//   numOneElement.value = '';
//   numTwoElement.value = '';
//   operatorElement.value = '';
//   // clear DOM
//   const calclationElement = document.querySelector('#');
//   calclationElement.innerHTML = '';
//   // GET new Data
//   app.get();
// })
// .catch((error) => {
//   console.log('ERROR: ', error);
// });
// }




// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
