const express = require('express');
const db = require('./db');
const app = express();
const port = 8080;

db.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});