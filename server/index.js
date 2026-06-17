require('dotenv').config({ quiet: true });
const express = require('express');
const path = require('path');
const db = require('./db');
const router = require('./routes');
const cors = require('cors');
const app = express();
const port = 8080;

db.connect();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.get('/{*path}', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});