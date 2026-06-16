const { user } = require('../models_schemas/Users');

const signup = async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const passwordHash = req.body.password;

    await user.insertOne({
      username,
      email,
      passwordHash
    });
    res.sendStatus(201);

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

const deleteUser = async (req, res) => {
  try {
    user.deleteOne({ username: req.body.username });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

module.exports = { signup, deleteUser }