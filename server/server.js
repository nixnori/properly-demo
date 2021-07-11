const express = require('express')
const app = express();
const cors = require('cors');
const port = 8000;
const properties = require('./data/properties.json');

app.get('/properties', (req, res) => {
    res.status(200).json(properties);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});