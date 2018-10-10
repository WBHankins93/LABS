const express = require('express');
const app = express();

const greeting = ['Ben', 'Alex', 'Mariana', 'Jawad']

// app.get('/greeting', (req, res) => {
//   res.send('Hello stranger')
// })


app.get('/greeting/:index', (req, res) => {
  console.log(req.params)
  res.send(greeting[req.params.index] + ' ...Welcome to Thunderdome ')
});


app.listen(3000, (req, res) => {
  console.log('The app is alive');
})
