const express = require('express');
const router = express.Router();
const search = require('./controllers/searchController');
const user = require('./controllers/userController');
// const watchList = require('./controllers/watchListController');

router.route('/search')
  .patch(search.addNote)
  .post(search.lookup)
  .get(search.getHistory)
  .delete(search.deleteHistory);

router.post('/users/signup', user.signup);
router.delete('/users', user.deleteUser);

module.exports = router;