const express = require('express');
const app = express();
const user = require('../models_schemas/Users');
const axios = require('axios');

const lookup = async (req, res) => {
  try {
    const url = 'https://iplocate.io/api/lookup/';
    const ip = req.body.ip;
    const response = await axios.get(`${url}${ip}`);
    res.status(201).json(response.data);

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}


module.exports = { lookup };