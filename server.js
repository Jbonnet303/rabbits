const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/rabbits', {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

const rabbitController = require('./controllers/rabbits.js');
app.use('/rabbits', rabbitController);

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('listening...');
})
