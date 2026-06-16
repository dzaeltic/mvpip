const express = require('express');
const router = express.Router();
const search = require('./controllers/searchController');
const user = require('./controllers/userController');
const watchList = require('./controllers/watchListController');

router.route('/api/search')
  .post(search.lookup)
  .get(search.history)



module.exports = router;