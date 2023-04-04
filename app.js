const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello fro server side}', app: 'Natours' });
});
const port = 3000;

app.post('/', (req, res) => {
  res.send('You can post something');
});

app.listen(port, () => {
  console.log('Server is running');
});
