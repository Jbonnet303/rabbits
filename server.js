const express = require('express');
const app = express();

app.use(express.json());

const rabbitController = require('./controllers/rabbits.js');
app.use('/rabbits', rabbitController);

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('listening...');
})
