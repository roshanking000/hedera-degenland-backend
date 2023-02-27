const express = require('express');
const router = express.Router();
const account = require("./controller");

router.get('/get_sold_list', account.getSoldList);

module.exports = router;
