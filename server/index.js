require('dotenv').config({ quiet: true });
const express = require('express');
const db = require('./db');
const router = require('./routes')
const cors = require('cors');
const app = express();
const port = 8080;

db.connect();

app.use(cors());
app.use(express.json())
app.use(router);

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});