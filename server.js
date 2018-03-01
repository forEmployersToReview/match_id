// Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// Helpers
const { validateInput } = require('./utils');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/validate_id', (req, res) => {
  const idMatch = validateInput(req.body.id);
  // idMatch should return the amount of matches found for the given id sent by the client.
  if (!idMatch) {
    res.status(400).send({ error: 'Not found message' });
    return;
  }
  if (idMatch > 1) {
    res.status(206).send({ error: 'Incomplete message' });
    return;
  }
  // Sending a dummy packet to fake the data retrieved.
  res.status(200).send({
    name: 'Merlin',
    age: 283,
    rank: 'Mastermind of Wizardry'
  });
  return;
});

app.listen(port, () => console.log(`Listening on port ${port}`));
