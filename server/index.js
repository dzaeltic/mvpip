require('dotenv').config();
const express = require('express');
const db = require('./db');
const app = express();
const port = 8080;

db.connect();

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});