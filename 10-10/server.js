const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const methodOverride = require('method-override');
const Animals = require('./models/animals')


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


app.get('/animals', (req,res) => {
  res.render('index.ejs', {
    animals: Animals
  });
});


app.get('/animals/:index', (req,res) => {
  res.render('show.ejs', {
    animals: Animals[req.params.index]
  });
});


app.delete('/animals/:index', (req,res) => {
  console.log(req.params.index, ' index in the delete');
  Animals.splice(req.params.index, 1);
  res.redirect('/animals');
})



app.listen(3000, () => {
  console.log("App is running")
})
