const express = require('express');
const router = express.Router();
const search = require('./controllers/searchController');
const user = require('./controllers/userController');
const watchList = require('./controllers/watchListController');

router.route('/api/search')
  .post(search.lookup)
  .get(search.getHistory)
  .delete(search.deleteHistory);

router.post('/api/users/signup', user.signup);
router.delete('/api/users', user.deleteUser);

module.exports = router;