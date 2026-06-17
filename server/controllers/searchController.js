const { user } = require('../models_schemas/Users');
const axios = require('axios');

const lookup = async (req, res) => {
  try {
    const url = 'https://iplocate.io/api/lookup/';
    const ip = req.body.ip;
    const response = await axios.get(`${url}${ip}?apikey=${process.env.IPLOCATE_KEY}`);
    const ipObject = response.data
    await user.updateOne(
      { username: 'dzaeltic' }, 
      { $push: { searchHistory: { $each: [ipObject], $position: 0 } } }
    )
    res.status(201).json(ipObject);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getHistory = async (req, res) => {
  try {
    const history = await user.find({ username: 'dzaeltic'}, 'searchHistory');
    res.status(200).json(history);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const deleteHistory = async (req, res) => {
  try {
    await user.updateOne({ username: 'dzaeltic' }, { $set: { searchHistory: [] } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}


module.exports = { lookup, getHistory, deleteHistory };